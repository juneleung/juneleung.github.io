#coding=utf-8
import re
import json

Readmetxt = "/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting/README.txt"
output = "./static/scripts/dr_api/"

apiName = []
apiType = []
apiComment = []

started = False
with open(Readmetxt) as f:
    for line in f:
        if 'API functions are described below' in line:
            started = True
            print('Starting output')
        
        elif '# This class does not provide any API functio' in line:
            print('Ending output')
            break
        
        elif started:
            # print(line)
            line = line.replace("\n","")
            if "-->" in line and "#" in line:  
                parts = re.split('-->|#', line)
                apiName.append(parts[0])
                apiType.append(parts[1])
                apiComment.append(parts[2])
            elif "#" in line:    
                parts = re.split('#', line)
                # apiName.append(parts[0])
                apiName[-1] = apiName[-1] + parts[0]
                # apiType.append("")
                # apiComment.append(parts[1])
                apiComment[-1] = apiComment[-1] + parts[1]
            else:
                # apiName[-1] = apiName[-1] + parts[0]
                apiName.append(line)
                apiType.append("")
                apiComment.append("")



outstring = ""
firsttime = 1
with open(output+'dr_api_list.js', 'w') as file:
    file.write("window._apis = {\n")
    file.write("\tdescriptions: [\n")
    while apiName != [] and apiType != [] and apiComment != []:
        if apiName[0]==apiType[0]==apiComment[0]=="":
            apiName.pop(0)
            apiType.pop(0)
            apiComment.pop(0)
        elif apiName[0][0] != " " and apiType[0]=="" and apiComment[0]=="":
            if firsttime:
                firsttime = 0
            else:
                outstring += ("\t\t\t],\n\t\t},\n")
            outstring += ("\t\t{\n\t\t\tsection: \""+apiName[0].replace("﻿","")+"\",\n")
            outstring += ("\t\t\tapis: [\n")
            print("class\t",apiName[0])
            apiName.pop(0)
            apiType.pop(0)
            apiComment.pop(0)
        elif apiType[0]=="" and apiComment[0]!="": # more line comment
            print("eat line #")
            name = apiName.pop(0)
            apiName[0] = name + apiName[0]
            type = apiType.pop(0)
            apiType[0] = type + apiType[0]
            comm = apiComment.pop(0)
            apiComment[0] = comm + apiComment[0]
            outstring = outstring[:-10] + comm.replace("\"","\\\"") + "\",\n" + "\t\t\t\t},\n"
        elif "(" in apiName[0] and ")" not in apiName[0]: # more line name
            print("eat line")
            name = apiName.pop(0)
            apiName[0] = name + apiName[0]
            type = apiType.pop(0)
            apiType[0] = type + apiType[0]
            comm = apiComment.pop(0)
            apiComment[0] = comm + apiComment[0]
        elif "(" in apiName[0] and ")" in apiName[0]:
            # finalName.append(apiName[0])
            # finalType.append(apiType[0])    
            # finalComment.append(apiComment[0])  
            
            print("API\t",apiName[0],apiType[0],apiComment[0])
            outstring += ("\t\t\t\t{\n")
            outstring += ("\t\t\t\t\tfunctionDecl:\""+apiName[0].replace(" ","").replace("\"","\\\"")+"\",\n")
            outstring += ("\t\t\t\t\treturnType:\""+apiType[0].replace("  ","").replace("\"","\\\"")+"\",\n")
            outstring += ("\t\t\t\t\tdescription:\""+apiComment[0].replace("\"","\\\"")+"\",\n")
            outstring += ("\t\t\t\t},\n")
            
            apiName.pop(0)
            apiType.pop(0)
            apiComment.pop(0)
        else:
            print("else")
            print(apiName[0], apiType[0], apiComment[0])
            print(len(apiName[0]), len(apiType[0]), len(apiComment[0]))
            break

    file.write(outstring)
    file.write("\t\t\t],\n\t\t},\n")
    file.write("\t],\n")
    file.write("};\n")
    file.close()