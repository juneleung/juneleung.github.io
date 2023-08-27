window._apis = {
	descriptions: [
		{
			section: "Resolve",
			apis: [
				{
					functionDecl:"Fusion()",
					returnType:"Fusion ",
					description:" Returns the Fusion object. Starting point for Fusion scripts.",
				},
				{
					functionDecl:"GetMediaStorage()",
					returnType:"MediaStorage ",
					description:" Returns the media storage object to query and act on media locations.",
				},
				{
					functionDecl:"GetProjectManager()",
					returnType:"ProjectManager ",
					description:" Returns the project manager object for currently open database.",
				},
				{
					functionDecl:"OpenPage(pageName)",
					returnType:"Bool ",
					description:" Switches to indicated page in DaVinci Resolve. Input can be one of (\"media\", \"cut\", \"edit\", \"fusion\", \"color\", \"fairlight\", \"deliver\").",
				},
				{
					functionDecl:"GetCurrentPage()",
					returnType:"String ",
					description:" Returns the page currently displayed in the main window. Returned value can be one of (\"media\", \"cut\", \"edit\", \"fusion\", \"color\", \"fairlight\", \"deliver\", None).",
				},
				{
					functionDecl:"GetProductName()",
					returnType:"string ",
					description:" Returns product name.",
				},
				{
					functionDecl:"GetVersion()",
					returnType:"[version fields] ",
					description:" Returns list of product version fields in [major, minor, patch, build, suffix] format.",
				},
				{
					functionDecl:"GetVersionString()",
					returnType:"string ",
					description:" Returns product version in \"major.minor.patch[suffix].build\" format.",
				},
				{
					functionDecl:"LoadLayoutPreset(presetName)",
					returnType:"Bool ",
					description:" Loads UI layout from saved preset named 'presetName'.",
				},
				{
					functionDecl:"UpdateLayoutPreset(presetName)",
					returnType:"Bool ",
					description:" Overwrites preset named 'presetName' with current UI layout.",
				},
				{
					functionDecl:"ExportLayoutPreset(presetName,presetFilePath)",
					returnType:"Bool ",
					description:" Exports preset named 'presetName' to path 'presetFilePath'.",
				},
				{
					functionDecl:"DeleteLayoutPreset(presetName)",
					returnType:"Bool ",
					description:" Deletes preset named 'presetName'.",
				},
				{
					functionDecl:"SaveLayoutPreset(presetName)",
					returnType:"Bool ",
					description:" Saves current UI layout as a preset named 'presetName'.",
				},
				{
					functionDecl:"ImportLayoutPreset(presetFilePath,presetName)",
					returnType:"Bool ",
					description:" Imports preset from path 'presetFilePath'. The optional argument 'presetName' specifies how the preset shall be named. If not specified, the preset is named based on the filename.",
				},
				{
					functionDecl:"Quit()",
					returnType:"None ",
					description:" Quits the Resolve App.",
				},
			],
		},
		{
			section: "ProjectManager",
			apis: [
				{
					functionDecl:"ArchiveProject(projectName,filePath,isArchiveSrcMedia=True,isArchiveRenderCache=True,isArchiveProxyMedia=False)",
					returnType:"Bool ",
					description:" Archives project to provided file path with the configuration as provided by the optional arguments",
				},
				{
					functionDecl:"CreateProject(projectName)",
					returnType:"Project",
					description:" Creates and returns a project if projectName (string) is unique, and None if it is not.",
				},
				{
					functionDecl:"DeleteProject(projectName)",
					returnType:"Bool ",
					description:" Delete project in the current folder if not currently loaded",
				},
				{
					functionDecl:"LoadProject(projectName)",
					returnType:"Project",
					description:" Loads and returns the project with name = projectName (string) if there is a match found, and None if there is no matching Project.",
				},
				{
					functionDecl:"GetCurrentProject()",
					returnType:"Project",
					description:" Returns the currently loaded Resolve project.",
				},
				{
					functionDecl:"SaveProject()",
					returnType:"Bool ",
					description:" Saves the currently loaded project with its own name. Returns True if successful.",
				},
				{
					functionDecl:"CloseProject(project)",
					returnType:"Bool ",
					description:" Closes the specified project without saving.",
				},
				{
					functionDecl:"CreateFolder(folderName)",
					returnType:"Bool ",
					description:" Creates a folder if folderName (string) is unique.",
				},
				{
					functionDecl:"DeleteFolder(folderName)",
					returnType:"Bool ",
					description:" Deletes the specified folder if it exists. Returns True in case of success.",
				},
				{
					functionDecl:"GetProjectListInCurrentFolder()",
					returnType:"[project names...] ",
					description:" Returns a list of project names in current folder.",
				},
				{
					functionDecl:"GetFolderListInCurrentFolder()",
					returnType:"[folder names...]",
					description:" Returns a list of folder names in current folder.",
				},
				{
					functionDecl:"GotoRootFolder()",
					returnType:"Bool ",
					description:" Opens root folder in database.",
				},
				{
					functionDecl:"GotoParentFolder()",
					returnType:"Bool ",
					description:" Opens parent folder of current folder in database if current folder has parent.",
				},
				{
					functionDecl:"GetCurrentFolder()",
					returnType:"string ",
					description:" Returns the current folder name.",
				},
				{
					functionDecl:"OpenFolder(folderName)",
					returnType:"Bool ",
					description:" Opens folder under given name.",
				},
				{
					functionDecl:"ImportProject(filePath,projectName=None)",
					returnType:"Bool ",
					description:" Imports a project from the file path provided with given project name, if any. Returns True if successful.",
				},
				{
					functionDecl:"ExportProject(projectName,filePath,withStillsAndLUTs=True)",
					returnType:"Bool",
					description:" Exports project to provided file path, including stills and LUTs if withStillsAndLUTs is True (enabled by default). Returns True in case of success.",
				},
				{
					functionDecl:"RestoreProject(filePath,projectName=None)",
					returnType:"Bool ",
					description:" Restores a project from the file path provided with given project name, if any. Returns True if successful.",
				},
				{
					functionDecl:"GetCurrentDatabase()",
					returnType:"{dbInfo} ",
					description:" Returns a dictionary (with keys 'DbType', 'DbName' and optional 'IpAddress') corresponding to the current database connection",
				},
				{
					functionDecl:"GetDatabaseList()",
					returnType:"[{dbInfo}] ",
					description:" Returns a list of dictionary items (with keys 'DbType', 'DbName' and optional 'IpAddress') corresponding to all the databases added to Resolve",
				},
				{
					functionDecl:"SetCurrentDatabase({dbInfo})",
					returnType:"Bool ",
					description:" Switches current database connection to the database specified by the keys below, and closes any open project. 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbName': database name (string) 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbName': database name (string) 'IpAddress': IP address of the PostgreSQL server (string, optional key - defaults to '127.0.0.1') 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbName': database name (string) 'IpAddress': IP address of the PostgreSQL server (string, optional key - defaults to '127.0.0.1') 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbName': database name (string) 'IpAddress': IP address of the PostgreSQL server (string, optional key - defaults to '127.0.0.1')",
				},
				{
					functionDecl:"ProjectGetMediaPool()",
					returnType:"MediaPool",
					description:" 'DbType': 'Disk' or 'PostgreSQL' (string) 'DbName': database name (string) 'IpAddress': IP address of the PostgreSQL server (string, optional key - defaults to '127.0.0.1') Returns the Media Pool object.",
				},
				{
					functionDecl:"GetTimelineCount()",
					returnType:"int",
					description:" Returns the number of timelines currently present in the project.",
				},
				{
					functionDecl:"GetTimelineByIndex(idx)",
					returnType:"Timeline ",
					description:" Returns timeline at the given index, 1 <= idx <= project.GetTimelineCount()",
				},
				{
					functionDecl:"GetCurrentTimeline()",
					returnType:"Timeline ",
					description:" Returns the currently loaded timeline.",
				},
				{
					functionDecl:"SetCurrentTimeline(timeline)",
					returnType:"Bool ",
					description:" Sets given timeline as current timeline for the project. Returns True if successful.",
				},
				{
					functionDecl:"GetGallery()",
					returnType:"Gallery",
					description:" Returns the Gallery object.",
				},
				{
					functionDecl:"GetName()",
					returnType:"string ",
					description:" Returns project name.",
				},
				{
					functionDecl:"SetName(projectName)",
					returnType:"Bool ",
					description:" Sets project name if given projectName (string) is unique.",
				},
				{
					functionDecl:"GetPresetList()",
					returnType:"[presets...] ",
					description:" Returns a list of presets and their information.",
				},
				{
					functionDecl:"SetPreset(presetName)",
					returnType:"Bool ",
					description:" Sets preset by given presetName (string) into project.",
				},
				{
					functionDecl:"AddRenderJob()",
					returnType:"string ",
					description:" Adds a render job based on current render settings to the render queue. Returns a unique job id (string) for the new render job.",
				},
				{
					functionDecl:"DeleteRenderJob(jobId)",
					returnType:"Bool ",
					description:" Deletes render job for input job id (string).",
				},
				{
					functionDecl:"DeleteAllRenderJobs()",
					returnType:"Bool ",
					description:" Deletes all render jobs in the queue.",
				},
				{
					functionDecl:"GetRenderJobList()",
					returnType:"[render jobs...] ",
					description:" Returns a list of render jobs and their information.",
				},
				{
					functionDecl:"GetRenderPresetList()",
					returnType:"[presets...] ",
					description:" Returns a list of render presets and their information.",
				},
				{
					functionDecl:"StartRendering(jobId1,jobId2,...)",
					returnType:"Bool ",
					description:" Starts rendering jobs indicated by the input job ids.",
				},
				{
					functionDecl:"StartRendering([jobIds...],isInteractiveMode=False)",
					returnType:"Bool ",
					description:" Starts rendering jobs indicated by the input job ids. The optional \"isInteractiveMode\", when set, enables error feedback in the UI during rendering.",
				},
				{
					functionDecl:"StartRendering(isInteractiveMode=False)",
					returnType:"Bool ",
					description:" The optional \"isInteractiveMode\", when set, enables error feedback in the UI during rendering. Starts rendering all queued render jobs.  The optional \"isInteractiveMode\", when set, enables error feedback in the UI during rendering.",
				},
				{
					functionDecl:"StopRendering()",
					returnType:"None ",
					description:" The optional \"isInteractiveMode\", when set, enables error feedback in the UI during rendering. Stops any current render processes.",
				},
				{
					functionDecl:"IsRenderingInProgress()",
					returnType:"Bool ",
					description:" Returns True if rendering is in progress.",
				},
				{
					functionDecl:"LoadRenderPreset(presetName)",
					returnType:"Bool ",
					description:" Sets a preset as current preset for rendering if presetName (string) exists.",
				},
				{
					functionDecl:"SaveAsNewRenderPreset(presetName)",
					returnType:"Bool ",
					description:" Creates new render preset by given name if presetName(string) is unique.",
				},
				{
					functionDecl:"SetRenderSettings({settings})",
					returnType:"Bool ",
					description:" Sets given settings for rendering. Settings is a dict, with support for the keys: Refer to \"Looking up render settings\" section for information for supported settings",
				},
				{
					functionDecl:"GetRenderJobStatus(jobId)",
					returnType:"{status info}",
					description:" Refer to \"Looking up render settings\" section for information for supported settings Returns a dict with job status and completion percentage of the job by given jobId (string).",
				},
				{
					functionDecl:"GetSetting(settingName)",
					returnType:"string ",
					description:" Returns value of project setting (indicated by settingName, string). Check the section below for more information.",
				},
				{
					functionDecl:"SetSetting(settingName,settingValue)",
					returnType:"Bool ",
					description:" Sets the project setting (indicated by settingName, string) to the value (settingValue, string). Check the section below for more information.",
				},
				{
					functionDecl:"GetRenderFormats()",
					returnType:"{render formats..} ",
					description:" Returns a dict (format -> file extension) of available render formats.",
				},
				{
					functionDecl:"GetRenderCodecs(renderFormat)",
					returnType:"{render codecs...} ",
					description:" Returns a dict (codec description -> codec name) of available codecs for given render format (string).",
				},
				{
					functionDecl:"GetCurrentRenderFormatAndCodec()",
					returnType:"> {format, codec}",
					description:" Returns a dict with currently selected format 'format' and render codec 'codec'.",
				},
				{
					functionDecl:"SetCurrentRenderFormatAndCodec(format,codec)",
					returnType:"Bool ",
					description:" Sets given render format (string) and render codec (string) as options for rendering.",
				},
				{
					functionDecl:"GetCurrentRenderMode()",
					returnType:"int",
					description:" Returns the render mode: 0 - Individual clips, 1 - Single clip.",
				},
				{
					functionDecl:"SetCurrentRenderMode(renderMode)",
					returnType:"Bool ",
					description:" Sets the render mode. Specify renderMode = 0 for Individual clips, 1 for Single clip.",
				},
				{
					functionDecl:"GetRenderResolutions(format,codec)",
					returnType:"[{Resolution}] ",
					description:" Returns list of resolutions applicable for the given render format (string) and render codec (string). Returns full list of resolutions if no argument is provided. Each element in the list is a dictionary with 2 keys \"Width\" and \"Height\".",
				},
				{
					functionDecl:"RefreshLUTList()",
					returnType:"Bool ",
					description:" Refreshes LUT List",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" Returns a unique ID for the project item",
				},
				{
					functionDecl:"InsertAudioToCurrentTrackAtPlayhead(mediaPath,startOffsetInSamples,durationInSamples)",
					returnType:"Bool ",
					description:" Inserts the media specified by mediaPath (string) with startOffsetInSamples (int) and durationInSamples (int) at the playhead on a selected track on the Fairlight page. Returns True if successful, otherwise False.",
				},
				{
					functionDecl:"LoadBurnInPreset(presetName)",
					returnType:"Bool ",
					description:" Loads user defined data burn in preset for project when supplied presetName (string). Returns true if successful.",
				},
				{
					functionDecl:"ExportCurrentFrameAsStill(filePath)",
					returnType:"Bool ",
					description:" Exports current frame as still to supplied filePath. filePath must end in valid export file format. Returns True if succssful, False otherwise.",
				},
			],
		},
		{
			section: "MediaStorage",
			apis: [
				{
					functionDecl:"GetMountedVolumeList()",
					returnType:"[paths...] ",
					description:" Returns list of folder paths corresponding to mounted volumes displayed in Resolve’s Media Storage.",
				},
				{
					functionDecl:"GetSubFolderList(folderPath)",
					returnType:"[paths...] ",
					description:" Returns list of folder paths in the given absolute folder path.",
				},
				{
					functionDecl:"GetFileList(folderPath)",
					returnType:"[paths...] ",
					description:" Returns list of media and file listings in the given absolute folder path. Note that media listings may be logically consolidated entries.",
				},
				{
					functionDecl:"RevealInStorage(path)",
					returnType:"Bool ",
					description:" Expands and displays given file/folder path in Resolve’s Media Storage.",
				},
				{
					functionDecl:"AddItemListToMediaPool(item1,item2,...)",
					returnType:"[clips...] ",
					description:" Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is one or more file/folder paths. Returns a list of the MediaPoolItems created.",
				},
				{
					functionDecl:"AddItemListToMediaPool([items...])",
					returnType:"[clips...] ",
					description:" Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is an array of file/folder paths. Returns a list of the MediaPoolItems created.",
				},
				{
					functionDecl:"AddItemListToMediaPool([{itemInfo},...])",
					returnType:"[clips...] ",
					description:" Adds list of itemInfos specified as dict of \"media\", \"startFrame\" (int), \"endFrame\" (int) from Media Storage into current Media Pool folder. Returns a list of the MediaPoolItems created.",
				},
				{
					functionDecl:"AddClipMattesToMediaPool(MediaPoolItem,[paths],stereoEye)",
					returnType:"Bool ",
					description:" Adds specified media files as mattes for the specified MediaPoolItem. StereoEye is an optional argument for specifying which eye to add the matte to for stereo clips (\"left\" or \"right\"). Returns True if successful.",
				},
				{
					functionDecl:"AddTimelineMattesToMediaPool([paths])",
					returnType:"[MediaPoolItems] ",
					description:" Adds specified media files as timeline mattes in current media pool folder. Returns a list of created MediaPoolItems.",
				},
			],
		},
		{
			section: "MediaPool",
			apis: [
				{
					functionDecl:"GetRootFolder()",
					returnType:"Folder ",
					description:" Returns root Folder of Media Pool",
				},
				{
					functionDecl:"AddSubFolder(folder,name)",
					returnType:"Folder ",
					description:" Adds new subfolder under specified Folder object with the given name.",
				},
				{
					functionDecl:"RefreshFolders()",
					returnType:"Bool ",
					description:" Updates the folders in collaboration mode",
				},
				{
					functionDecl:"CreateEmptyTimeline(name)",
					returnType:"Timeline ",
					description:" Adds new timeline with given name.",
				},
				{
					functionDecl:"AppendToTimeline(clip1,clip2,...)",
					returnType:"[TimelineItem] ",
					description:" Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.",
				},
				{
					functionDecl:"AppendToTimeline([clips])",
					returnType:"[TimelineItem] ",
					description:" Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.",
				},
				{
					functionDecl:"AppendToTimeline([{clipInfo},...])",
					returnType:"[TimelineItem] ",
					description:" Appends list of clipInfos specified as dict of \"mediaPoolItem\", \"startFrame\" (int), \"endFrame\" (int), (optional) \"mediaType\" (int; 1 - Video only, 2 - Audio only), \"trackIndex\" (int) and \"recordFrame\" (int). Returns the list of appended timelineItems.",
				},
				{
					functionDecl:"CreateTimelineFromClips(name,clip1,clip2,...)",
					returnType:"Timeline ",
					description:" Creates new timeline with specified name, and appends the specified MediaPoolItem objects.",
				},
				{
					functionDecl:"CreateTimelineFromClips(name,[clips])",
					returnType:"Timeline ",
					description:" Creates new timeline with specified name, and appends the specified MediaPoolItem objects.",
				},
				{
					functionDecl:"CreateTimelineFromClips(name,[{clipInfo}])",
					returnType:"Timeline ",
					description:" Creates new timeline with specified name, appending the list of clipInfos specified as a dict of \"mediaPoolItem\", \"startFrame\" (int), \"endFrame\" (int), \"recordFrame\" (int).",
				},
				{
					functionDecl:"ImportTimelineFromFile(filePath,{importOptions})",
					returnType:"Timeline ",
					description:" Creates timeline based on parameters within given file (AAF/EDL/XML/FCPXML/DRT/ADL) and optional importOptions dict, with support for the keys: \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"importSourceClips\": Bool, specifies whether source clips should be imported, True by default. Not valid for DRT import \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"importSourceClips\": Bool, specifies whether source clips should be imported, True by default. Not valid for DRT import \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"importSourceClips\" is True \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"importSourceClips\": Bool, specifies whether source clips should be imported, True by default. Not valid for DRT import \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"importSourceClips\" is True \"sourceClipsFolders\": List of Media Pool folder objects to search for source clips if the media is not present in current folder and if \"importSourceClips\" is False. Not valid for DRT import \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"importSourceClips\": Bool, specifies whether source clips should be imported, True by default. Not valid for DRT import \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"importSourceClips\" is True \"sourceClipsFolders\": List of Media Pool folder objects to search for source clips if the media is not present in current folder and if \"importSourceClips\" is False. Not valid for DRT import \"interlaceProcessing\": Bool, specifies whether to enable interlace processing on the imported timeline being created. valid only for AAF import",
				},
				{
					functionDecl:"DeleteTimelines([timeline])",
					returnType:"Bool ",
					description:" \"timelineName\": string, specifies the name of the timeline to be created. Not valid for DRT import \"importSourceClips\": Bool, specifies whether source clips should be imported, True by default. Not valid for DRT import \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"importSourceClips\" is True \"sourceClipsFolders\": List of Media Pool folder objects to search for source clips if the media is not present in current folder and if \"importSourceClips\" is False. Not valid for DRT import \"interlaceProcessing\": Bool, specifies whether to enable interlace processing on the imported timeline being created. valid only for AAF import Deletes specified timelines in the media pool.",
				},
				{
					functionDecl:"GetCurrentFolder()",
					returnType:"Folder ",
					description:" Returns currently selected Folder.",
				},
				{
					functionDecl:"SetCurrentFolder(Folder)",
					returnType:"Bool ",
					description:" Sets current folder by given Folder.",
				},
				{
					functionDecl:"DeleteClips([clips])",
					returnType:"Bool ",
					description:" Deletes specified clips or timeline mattes in the media pool",
				},
				{
					functionDecl:"ImportFolderFromFile(filePath,sourceClipsPath=\"\")",
					returnType:"Bool",
					description:" Returns true if import from given DRB filePath is successful, false otherwise sourceClipsPath is a string that specifies a filesystem path to search for source clips if the media is inaccessible in their original path, empty by default",
				},
				{
					functionDecl:"DeleteFolders([subfolders])",
					returnType:"Bool ",
					description:" sourceClipsPath is a string that specifies a filesystem path to search for source clips if the media is inaccessible in their original path, empty by default Deletes specified subfolders in the media pool",
				},
				{
					functionDecl:"MoveClips([clips],targetFolder)",
					returnType:"Bool ",
					description:" Moves specified clips to target folder.",
				},
				{
					functionDecl:"MoveFolders([folders],targetFolder)",
					returnType:"Bool ",
					description:" Moves specified folders to target folder.",
				},
				{
					functionDecl:"GetClipMatteList(MediaPoolItem)",
					returnType:"[paths]",
					description:" Get mattes for specified MediaPoolItem, as a list of paths to the matte files.",
				},
				{
					functionDecl:"GetTimelineMatteList(Folder)",
					returnType:"[MediaPoolItems] ",
					description:" Get mattes in specified Folder, as list of MediaPoolItems.",
				},
				{
					functionDecl:"DeleteClipMattes(MediaPoolItem,[paths])",
					returnType:"Bool ",
					description:" Delete mattes based on their file paths, for specified MediaPoolItem. Returns True on success.",
				},
				{
					functionDecl:"RelinkClips([MediaPoolItem],folderPath)",
					returnType:"Bool ",
					description:" Update the folder location of specified media pool clips with the specified folder path.",
				},
				{
					functionDecl:"UnlinkClips([MediaPoolItem])",
					returnType:"Bool ",
					description:" Unlink specified media pool clips.",
				},
				{
					functionDecl:"ImportMedia([items...])",
					returnType:"[MediaPoolItems] ",
					description:" Imports specified file/folder paths into current Media Pool folder. Input is an array of file/folder paths. Returns a list of the MediaPoolItems created.",
				},
				{
					functionDecl:"ImportMedia([{clipInfo}])",
					returnType:"[MediaPoolItems] ",
					description:" Imports file path(s) into current Media Pool folder as specified in list of clipInfo dict. Returns a list of the MediaPoolItems created. Each clipInfo gets imported as one MediaPoolItem unless 'Show Individual Frames' is turned on. Each clipInfo gets imported as one MediaPoolItem unless 'Show Individual Frames' is turned on. Example: ImportMedia([{\"FilePath\":\"file_%03d.dpx\", \"StartIndex\":1, \"EndIndex\":100}]) would import clip \"file_[001-100].dpx\".",
				},
				{
					functionDecl:"ExportMetadata(fileName,[clips])",
					returnType:"Bool ",
					description:" Each clipInfo gets imported as one MediaPoolItem unless 'Show Individual Frames' is turned on. Example: ImportMedia([{\"FilePath\":\"file_%03d.dpx\", \"StartIndex\":1, \"EndIndex\":100}]) would import clip \"file_[001-100].dpx\". Exports metadata of specified clips to 'fileName' in CSV format. If no clips are specified, all clips from media pool will be used.",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" If no clips are specified, all clips from media pool will be used. Returns a unique ID for the media pool",
				},
			],
		},
		{
			section: "Folder",
			apis: [
				{
					functionDecl:"GetClipList()",
					returnType:"[clips...] ",
					description:" Returns a list of clips (items) within the folder.",
				},
				{
					functionDecl:"GetName()",
					returnType:"string ",
					description:" Returns the media folder name.",
				},
				{
					functionDecl:"GetSubFolderList()",
					returnType:"[folders...] ",
					description:" Returns a list of subfolders in the folder.",
				},
				{
					functionDecl:"GetIsFolderStale()",
					returnType:"bool ",
					description:" Returns true if folder is stale in collaboration mode, false otherwise",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" Returns a unique ID for the media pool folder",
				},
				{
					functionDecl:"Export(filePath)",
					returnType:"bool ",
					description:" Returns true if export of DRB folder to filePath is successful, false otherwise",
				},
			],
		},
		{
			section: "MediaPoolItem",
			apis: [
				{
					functionDecl:"GetName()",
					returnType:"string ",
					description:" Returns the clip name.",
				},
				{
					functionDecl:"GetMetadata(metadataType=None)",
					returnType:"string|dict",
					description:" Returns the metadata value for the key 'metadataType'. If no argument is specified, a dict of all set metadata properties is returned.",
				},
				{
					functionDecl:"SetMetadata(metadataType,metadataValue)",
					returnType:"Bool ",
					description:" If no argument is specified, a dict of all set metadata properties is returned. Sets the given metadata to metadataValue (string). Returns True if successful.",
				},
				{
					functionDecl:"SetMetadata({metadata})",
					returnType:"Bool ",
					description:" Sets the item metadata with specified 'metadata' dict. Returns True if successful.",
				},
				{
					functionDecl:"GetMediaId()",
					returnType:"string ",
					description:" Returns the unique ID for the MediaPoolItem.",
				},
				{
					functionDecl:"AddMarker(frameId,color,name,note,duration,customData)",
					returnType:"Bool ",
					description:" Creates a new marker at given frameId position and with given marker information. 'customData' is optional and helps to attach user specific data to the marker.",
				},
				{
					functionDecl:"GetMarkers()",
					returnType:"{markers...} ",
					description:" Returns a dict (frameId -> {information}) of all markers and dicts with their information. Example of output format: {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} Example of output format: {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} In the above example - there is one 'Green' marker at offset 96 (position of the marker)",
				},
				{
					functionDecl:"GetMarkerByCustomData(customData)",
					returnType:"{markers...} ",
					description:" Example of output format: {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} In the above example - there is one 'Green' marker at offset 96 (position of the marker) Returns marker {information} for the first matching marker with specified customData.",
				},
				{
					functionDecl:"UpdateMarkerCustomData(frameId,customData)",
					returnType:"Bool ",
					description:" Updates customData (string) for the marker at given frameId position. CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.",
				},
				{
					functionDecl:"GetMarkerCustomData(frameId)",
					returnType:"string ",
					description:" Returns customData string for the marker at given frameId position.",
				},
				{
					functionDecl:"DeleteMarkersByColor(color)",
					returnType:"Bool ",
					description:" Delete all markers of the specified color from the media pool item. \"All\" as argument deletes all color markers.",
				},
				{
					functionDecl:"DeleteMarkerAtFrame(frameNum)",
					returnType:"Bool ",
					description:" Delete marker at frame number from the media pool item.",
				},
				{
					functionDecl:"DeleteMarkerByCustomData(customData)",
					returnType:"Bool ",
					description:" Delete first matching marker with specified customData.",
				},
				{
					functionDecl:"AddFlag(color)",
					returnType:"Bool ",
					description:" Adds a flag with given color (string).",
				},
				{
					functionDecl:"GetFlagList()",
					returnType:"[colors...]",
					description:" Returns a list of flag colors assigned to the item.",
				},
				{
					functionDecl:"ClearFlags(color)",
					returnType:"Bool ",
					description:" Clears the flag of the given color if one exists. An \"All\" argument is supported and clears all flags.",
				},
				{
					functionDecl:"GetClipColor()",
					returnType:"string ",
					description:" Returns the item color as a string.",
				},
				{
					functionDecl:"SetClipColor(colorName)",
					returnType:"Bool ",
					description:" Sets the item color based on the colorName (string).",
				},
				{
					functionDecl:"ClearClipColor()",
					returnType:"Bool ",
					description:" Clears the item color.",
				},
				{
					functionDecl:"GetClipProperty(propertyName=None)",
					returnType:"string|dict",
					description:" Returns the property value for the key 'propertyName'.  If no argument is specified, a dict of all clip properties is returned. Check the section below for more information.",
				},
				{
					functionDecl:"SetClipProperty(propertyName,propertyValue)",
					returnType:"Bool ",
					description:" If no argument is specified, a dict of all clip properties is returned. Check the section below for more information. Sets the given property to propertyValue (string). Check the section below for more information.",
				},
				{
					functionDecl:"LinkProxyMedia(proxyMediaFilePath)",
					returnType:"Bool ",
					description:" Links proxy media located at path specified by arg 'proxyMediaFilePath' with the current clip. 'proxyMediaFilePath' should be absolute clip path.",
				},
				{
					functionDecl:"UnlinkProxyMedia()",
					returnType:"Bool ",
					description:" Unlinks any proxy media associated with clip.",
				},
				{
					functionDecl:"ReplaceClip(filePath)",
					returnType:"Bool ",
					description:" Replaces the underlying asset and metadata of MediaPoolItem with the specified absolute clip path.",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" Returns a unique ID for the media pool item",
				},
				{
					functionDecl:"TranscribeAudio()",
					returnType:"Bool ",
					description:" Transcribes audio of the MediaPoolItem. Returns True if successful; False otherwise",
				},
				{
					functionDecl:"ClearTranscription()",
					returnType:"Bool ",
					description:" Clears audio transcription of the MediaPoolItem. Returns True if successful; False otherwise.",
				},
			],
		},
		{
			section: "Timeline",
			apis: [
				{
					functionDecl:"GetName()",
					returnType:"string ",
					description:" Returns the timeline name.",
				},
				{
					functionDecl:"SetName(timelineName)",
					returnType:"Bool ",
					description:" Sets the timeline name if timelineName (string) is unique. Returns True if successful.",
				},
				{
					functionDecl:"GetStartFrame()",
					returnType:"int",
					description:" Returns the frame number at the start of timeline.",
				},
				{
					functionDecl:"GetEndFrame()",
					returnType:"int",
					description:" Returns the frame number at the end of timeline.",
				},
				{
					functionDecl:"SetStartTimecode(timecode)",
					returnType:"Bool ",
					description:" Set the start timecode of the timeline to the string 'timecode'. Returns true when the change is successful, false otherwise.",
				},
				{
					functionDecl:"GetStartTimecode()",
					returnType:"string ",
					description:" Returns the start timecode for the timeline.",
				},
				{
					functionDecl:"GetTrackCount(trackType)",
					returnType:"int",
					description:" Returns the number of tracks for the given track type (\"audio\", \"video\" or \"subtitle\").",
				},
				{
					functionDecl:"AddTrack(trackType,optionalSubTrackType)",
					returnType:"Bool ",
					description:" Adds track of trackType (\"video\", \"subtitle\", \"audio\"). Second argument optionalSubTrackType is required for \"audio\" optionalSubTrackType can be one of {\"mono\", \"stereo\", \"5.1\", \"5.1film\", \"7.1\", \"7.1film\", \"adaptive1\", ... , \"adaptive24\"}",
				},
				{
					functionDecl:"DeleteTrack(trackType,trackIndex)",
					returnType:"Bool ",
					description:" optionalSubTrackType can be one of {\"mono\", \"stereo\", \"5.1\", \"5.1film\", \"7.1\", \"7.1film\", \"adaptive1\", ... , \"adaptive24\"} Deletes track of trackType (\"video\", \"subtitle\", \"audio\") and given trackIndex. 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"SetTrackEnable(trackType,trackIndex,Bool)",
					returnType:"Bool ",
					description:" Enables/Disables track with given trackType and trackIndex trackType is one of {\"audio\", \"video\", \"subtitle\"} trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"GetIsTrackEnabled(trackType,trackIndex)",
					returnType:"Bool ",
					description:" trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType). Returns True if track with given trackType and trackIndex is enabled and False otherwise. trackType is one of {\"audio\", \"video\", \"subtitle\"} trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"SetTrackLock(trackType,trackIndex,Bool)",
					returnType:"Bool ",
					description:" trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType). Locks/Unlocks track with given trackType and trackIndex trackType is one of {\"audio\", \"video\", \"subtitle\"} trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"GetIsTrackLocked(trackType,trackIndex)",
					returnType:"Bool ",
					description:" trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType). Returns True if track with given trackType and trackIndex is locked and False otherwise. trackType is one of {\"audio\", \"video\", \"subtitle\"} trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"DeleteClips([timelineItems],Bool)",
					returnType:"Bool ",
					description:" trackType is one of {\"audio\", \"video\", \"subtitle\"} 1 <= trackIndex <= GetTrackCount(trackType). Deletes specified TimelineItems from the timeline, performing ripple delete if the second argument is True. Second argument is optional (The default for this is False)",
				},
				{
					functionDecl:"SetClipsLinked([timelineItems],Bool)",
					returnType:"Bool ",
					description:" Links or unlinks the specified TimelineItems depending on second argument.",
				},
				{
					functionDecl:"GetItemListInTrack(trackType,index)",
					returnType:"[items...] ",
					description:" Returns a list of timeline items on that track (based on trackType and index). 1 <= index <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"AddMarker(frameId,color,name,note,duration,customData)",
					returnType:"Bool ",
					description:" Creates a new marker at given frameId position and with given marker information. 'customData' is optional and helps to attach user specific data to the marker.",
				},
				{
					functionDecl:"GetMarkers()",
					returnType:"{markers...} ",
					description:" Returns a dict (frameId -> {information}) of all markers and dicts with their information. Example: a value of {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} indicates a single green marker at timeline offset 96",
				},
				{
					functionDecl:"GetMarkerByCustomData(customData)",
					returnType:"{markers...} ",
					description:" Example: a value of {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} indicates a single green marker at timeline offset 96 Returns marker {information} for the first matching marker with specified customData.",
				},
				{
					functionDecl:"UpdateMarkerCustomData(frameId,customData)",
					returnType:"Bool ",
					description:" Updates customData (string) for the marker at given frameId position. CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.",
				},
				{
					functionDecl:"GetMarkerCustomData(frameId)",
					returnType:"string ",
					description:" Returns customData string for the marker at given frameId position.",
				},
				{
					functionDecl:"DeleteMarkersByColor(color)",
					returnType:"Bool ",
					description:" Deletes all timeline markers of the specified color. An \"All\" argument is supported and deletes all timeline markers.",
				},
				{
					functionDecl:"DeleteMarkerAtFrame(frameNum)",
					returnType:"Bool ",
					description:" Deletes the timeline marker at the given frame number.",
				},
				{
					functionDecl:"DeleteMarkerByCustomData(customData)",
					returnType:"Bool ",
					description:" Delete first matching marker with specified customData.",
				},
				{
					functionDecl:"ApplyGradeFromDRX(path,gradeMode,item1,item2,...)",
					returnType:"Bool",
					description:" Loads a still from given file path (string) and applies grade to Timeline Items with gradeMode (int): 0 - \"No keyframes\", 1 - \"Source Timecode aligned\", 2 - \"Start Frames aligned\".",
				},
				{
					functionDecl:"ApplyGradeFromDRX(path,gradeMode,[items])",
					returnType:"Bool ",
					description:" Loads a still from given file path (string) and applies grade to Timeline Items with gradeMode (int): 0 - \"No keyframes\", 1 - \"Source Timecode aligned\", 2 - \"Start Frames aligned\".",
				},
				{
					functionDecl:"GetCurrentTimecode()",
					returnType:"string ",
					description:" Returns a string timecode representation for the current playhead position, while on Cut, Edit, Color, Fairlight and Deliver pages.",
				},
				{
					functionDecl:"SetCurrentTimecode(timecode)",
					returnType:"Bool ",
					description:" Sets current playhead position from input timecode for Cut, Edit, Color, Fairlight and Deliver pages.",
				},
				{
					functionDecl:"GetCurrentVideoItem()",
					returnType:"item ",
					description:" Returns the current video timeline item.",
				},
				{
					functionDecl:"GetCurrentClipThumbnailImage()",
					returnType:"{thumbnailData}",
					description:" Returns a dict (keys \"width\", \"height\", \"format\" and \"data\") with data containing raw thumbnail image data (RGB 8-bit image data encoded in base64 format) for current media in the Color Page. An example of how to retrieve and interpret thumbnails is provided in 6_get_current_media_thumbnail.py in the Examples folder.",
				},
				{
					functionDecl:"GetTrackName(trackType,trackIndex)",
					returnType:"string ",
					description:" An example of how to retrieve and interpret thumbnails is provided in 6_get_current_media_thumbnail.py in the Examples folder. Returns the track name for track indicated by trackType (\"audio\", \"video\" or \"subtitle\") and index. 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"SetTrackName(trackType,trackIndex,name)",
					returnType:"Bool ",
					description:" Sets the track name (string) for track indicated by trackType (\"audio\", \"video\" or \"subtitle\") and index. 1 <= trackIndex <= GetTrackCount(trackType).",
				},
				{
					functionDecl:"DuplicateTimeline(timelineName)",
					returnType:"timeline ",
					description:" Duplicates the timeline and returns the created timeline, with the (optional) timelineName, on success.",
				},
				{
					functionDecl:"CreateCompoundClip([timelineItems],{clipInfo})",
					returnType:"timelineItem ",
					description:" Creates a compound clip of input timeline items with an optional clipInfo map: {\"startTimecode\" : \"00:00:00:00\", \"name\" : \"Compound Clip 1\"}. It returns the created timeline item.",
				},
				{
					functionDecl:"CreateFusionClip([timelineItems])",
					returnType:"timelineItem ",
					description:" Creates a Fusion clip of input timeline items. It returns the created timeline item.",
				},
				{
					functionDecl:"ImportIntoTimeline(filePath,{importOptions})",
					returnType:"Bool ",
					description:" Imports timeline items from an AAF file and optional importOptions dict into the timeline, with support for the keys: \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"insertWithOffset\": string, specifies insert with offset value in timecode format - defaults to \"00:00:00:00\", applicable if \"insertAdditionalTracks\" is False \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"insertWithOffset\": string, specifies insert with offset value in timecode format - defaults to \"00:00:00:00\", applicable if \"insertAdditionalTracks\" is False \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"ignoreFileExtensionsWhenMatching\" is True \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"insertWithOffset\": string, specifies insert with offset value in timecode format - defaults to \"00:00:00:00\", applicable if \"insertAdditionalTracks\" is False \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"ignoreFileExtensionsWhenMatching\" is True \"sourceClipsFolders\": string, list of Media Pool folder objects to search for source clips if the media is not present in current folder \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"insertWithOffset\": string, specifies insert with offset value in timecode format - defaults to \"00:00:00:00\", applicable if \"insertAdditionalTracks\" is False \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"ignoreFileExtensionsWhenMatching\" is True \"sourceClipsFolders\": string, list of Media Pool folder objects to search for source clips if the media is not present in current folder",
				},
				{
					functionDecl:"Export(fileName,exportType,exportSubtype)",
					returnType:"Bool ",
					description:" \"autoImportSourceClipsIntoMediaPool\": Bool, specifies if source clips should be imported into media pool, True by default \"ignoreFileExtensionsWhenMatching\": Bool, specifies if file extensions should be ignored when matching, False by default \"linkToSourceCameraFiles\": Bool, specifies if link to source camera files should be enabled, False by default \"useSizingInfo\": Bool, specifies if sizing information should be used, False by default \"importMultiChannelAudioTracksAsLinkedGroups\": Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default \"insertAdditionalTracks\": Bool, specifies if additional tracks should be inserted, True by default \"insertWithOffset\": string, specifies insert with offset value in timecode format - defaults to \"00:00:00:00\", applicable if \"insertAdditionalTracks\" is False \"sourceClipsPath\": string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if \"ignoreFileExtensionsWhenMatching\" is True \"sourceClipsFolders\": string, list of Media Pool folder objects to search for source clips if the media is not present in current folder Exports timeline to 'fileName' as per input exportType & exportSubtype format. Refer to section \"Looking up timeline export properties\" for information on the parameters.",
				},
				{
					functionDecl:"GetSetting(settingName)",
					returnType:"string ",
					description:" Refer to section \"Looking up timeline export properties\" for information on the parameters. Returns value of timeline setting (indicated by settingName : string). Check the section below for more information.",
				},
				{
					functionDecl:"SetSetting(settingName,settingValue)",
					returnType:"Bool ",
					description:" Sets timeline setting (indicated by settingName : string) to the value (settingValue : string). Check the section below for more information.",
				},
				{
					functionDecl:"InsertGeneratorIntoTimeline(generatorName)",
					returnType:"TimelineItem ",
					description:" Inserts a generator (indicated by generatorName : string) into the timeline.",
				},
				{
					functionDecl:"InsertFusionGeneratorIntoTimeline(generatorName)",
					returnType:"TimelineItem",
					description:" Inserts a Fusion generator (indicated by generatorName : string) into the timeline.",
				},
				{
					functionDecl:"InsertFusionCompositionIntoTimeline()",
					returnType:"TimelineItem ",
					description:" Inserts a Fusion composition into the timeline.",
				},
				{
					functionDecl:"InsertOFXGeneratorIntoTimeline(generatorName)",
					returnType:"TimelineItem ",
					description:" Inserts an OFX generator (indicated by generatorName : string) into the timeline.",
				},
				{
					functionDecl:"InsertTitleIntoTimeline(titleName)",
					returnType:"TimelineItem ",
					description:" Inserts a title (indicated by titleName : string) into the timeline.",
				},
				{
					functionDecl:"InsertFusionTitleIntoTimeline(titleName)",
					returnType:"TimelineItem ",
					description:" Inserts a Fusion title (indicated by titleName : string) into the timeline.",
				},
				{
					functionDecl:"GrabStill()",
					returnType:"galleryStill ",
					description:" Grabs still from the current video clip. Returns a GalleryStill object.",
				},
				{
					functionDecl:"GrabAllStills(stillFrameSource)",
					returnType:"[galleryStill] ",
					description:" Grabs stills from all the clips of the timeline at 'stillFrameSource' (1 - First frame, 2 - Middle frame). Returns the list of GalleryStill objects.",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" Returns a unique ID for the timeline",
				},
				{
					functionDecl:"CreateSubtitlesFromAudio()",
					returnType:"Bool ",
					description:" Creates subtitles from audio for the timeline. Returns True on success, False otherwise.",
				},
				{
					functionDecl:"DetectSceneCuts()",
					returnType:"Bool ",
					description:" Detects and makes scene cuts along the timeline. Returns True if successful, False otherwise.",
				},
			],
		},
		{
			section: "TimelineItem",
			apis: [
				{
					functionDecl:"GetName()",
					returnType:"string ",
					description:" Returns the item name.",
				},
				{
					functionDecl:"GetDuration()",
					returnType:"int",
					description:" Returns the item duration.",
				},
				{
					functionDecl:"GetEnd()",
					returnType:"int",
					description:" Returns the end frame position on the timeline.",
				},
				{
					functionDecl:"GetFusionCompCount()",
					returnType:"int",
					description:" Returns number of Fusion compositions associated with the timeline item.",
				},
				{
					functionDecl:"GetFusionCompByIndex(compIndex)",
					returnType:"fusionComp ",
					description:" Returns the Fusion composition object based on given index. 1 <= compIndex <= timelineItem.GetFusionCompCount()",
				},
				{
					functionDecl:"GetFusionCompNameList()",
					returnType:"[names...] ",
					description:" Returns a list of Fusion composition names associated with the timeline item.",
				},
				{
					functionDecl:"GetFusionCompByName(compName)",
					returnType:"fusionComp ",
					description:" Returns the Fusion composition object based on given name.",
				},
				{
					functionDecl:"GetLeftOffset()",
					returnType:"int",
					description:" Returns the maximum extension by frame for clip from left side.",
				},
				{
					functionDecl:"GetRightOffset()",
					returnType:"int",
					description:" Returns the maximum extension by frame for clip from right side.",
				},
				{
					functionDecl:"GetStart()",
					returnType:"int",
					description:" Returns the start frame position on the timeline.",
				},
				{
					functionDecl:"SetProperty(propertyKey,propertyValue)",
					returnType:"Bool ",
					description:" Sets the value of property \"propertyKey\" to value \"propertyValue\" Refer to \"Looking up Timeline item properties\" for more information",
				},
				{
					functionDecl:"GetProperty(propertyKey)",
					returnType:"int/[key:value]",
					description:" Refer to \"Looking up Timeline item properties\" for more information returns the value of the specified key if no key is specified, the method returns a dictionary(python) or table(lua) for all supported keys",
				},
				{
					functionDecl:"AddMarker(frameId,color,name,note,duration,customData)",
					returnType:"Bool ",
					description:" if no key is specified, the method returns a dictionary(python) or table(lua) for all supported keys Creates a new marker at given frameId position and with given marker information. 'customData' is optional and helps to attach user specific data to the marker.",
				},
				{
					functionDecl:"GetMarkers()",
					returnType:"{markers...} ",
					description:" Returns a dict (frameId -> {information}) of all markers and dicts with their information. Example: a value of {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} indicates a single green marker at clip offset 96",
				},
				{
					functionDecl:"GetMarkerByCustomData(customData)",
					returnType:"{markers...} ",
					description:" Example: a value of {96.0: {'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''}, ...} indicates a single green marker at clip offset 96 Returns marker {information} for the first matching marker with specified customData.",
				},
				{
					functionDecl:"UpdateMarkerCustomData(frameId,customData)",
					returnType:"Bool ",
					description:" Updates customData (string) for the marker at given frameId position. CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.",
				},
				{
					functionDecl:"GetMarkerCustomData(frameId)",
					returnType:"string ",
					description:" Returns customData string for the marker at given frameId position.",
				},
				{
					functionDecl:"DeleteMarkersByColor(color)",
					returnType:"Bool ",
					description:" Delete all markers of the specified color from the timeline item. \"All\" as argument deletes all color markers.",
				},
				{
					functionDecl:"DeleteMarkerAtFrame(frameNum)",
					returnType:"Bool ",
					description:" Delete marker at frame number from the timeline item.",
				},
				{
					functionDecl:"DeleteMarkerByCustomData(customData)",
					returnType:"Bool ",
					description:" Delete first matching marker with specified customData.",
				},
				{
					functionDecl:"AddFlag(color)",
					returnType:"Bool ",
					description:" Adds a flag with given color (string).",
				},
				{
					functionDecl:"GetFlagList()",
					returnType:"[colors...]",
					description:" Returns a list of flag colors assigned to the item.",
				},
				{
					functionDecl:"ClearFlags(color)",
					returnType:"Bool ",
					description:" Clear flags of the specified color. An \"All\" argument is supported to clear all flags. ",
				},
				{
					functionDecl:"GetClipColor()",
					returnType:"string ",
					description:" Returns the item color as a string.",
				},
				{
					functionDecl:"SetClipColor(colorName)",
					returnType:"Bool ",
					description:" Sets the item color based on the colorName (string).",
				},
				{
					functionDecl:"ClearClipColor()",
					returnType:"Bool ",
					description:" Clears the item color.",
				},
				{
					functionDecl:"AddFusionComp()",
					returnType:"fusionComp ",
					description:" Adds a new Fusion composition associated with the timeline item.",
				},
				{
					functionDecl:"ImportFusionComp(path)",
					returnType:"fusionComp ",
					description:" Imports a Fusion composition from given file path by creating and adding a new composition for the item.",
				},
				{
					functionDecl:"ExportFusionComp(path,compIndex)",
					returnType:"Bool ",
					description:" Exports the Fusion composition based on given index to the path provided.",
				},
				{
					functionDecl:"DeleteFusionCompByName(compName)",
					returnType:"Bool ",
					description:" Deletes the named Fusion composition.",
				},
				{
					functionDecl:"LoadFusionCompByName(compName)",
					returnType:"fusionComp ",
					description:" Loads the named Fusion composition as the active composition.",
				},
				{
					functionDecl:"RenameFusionCompByName(oldName,newName)",
					returnType:"Bool ",
					description:" Renames the Fusion composition identified by oldName.",
				},
				{
					functionDecl:"AddVersion(versionName,versionType)",
					returnType:"Bool ",
					description:" Adds a new color version for a video clip based on versionType (0 - local, 1 - remote).",
				},
				{
					functionDecl:"GetCurrentVersion()",
					returnType:"{versionName...} ",
					description:" Returns the current version of the video clip. The returned value will have the keys versionName and versionType(0 - local, 1 - remote).",
				},
				{
					functionDecl:"DeleteVersionByName(versionName,versionType)",
					returnType:"Bool ",
					description:" Deletes a color version by name and versionType (0 - local, 1 - remote).",
				},
				{
					functionDecl:"LoadVersionByName(versionName,versionType)",
					returnType:"Bool ",
					description:" Loads a named color version as the active version. versionType: 0 - local, 1 - remote.",
				},
				{
					functionDecl:"RenameVersionByName(oldName,newName,versionType)",
					returnType:"Bool ",
					description:" Renames the color version identified by oldName and versionType (0 - local, 1 - remote).",
				},
				{
					functionDecl:"GetVersionNameList(versionType)",
					returnType:"[names...] ",
					description:" Returns a list of all color versions for the given versionType (0 - local, 1 - remote).",
				},
				{
					functionDecl:"GetMediaPoolItem()",
					returnType:"MediaPoolItem",
					description:" Returns the media pool item corresponding to the timeline item if one exists.",
				},
				{
					functionDecl:"GetStereoConvergenceValues()",
					returnType:"{keyframes...} ",
					description:" Returns a dict (offset -> value) of keyframe offsets and respective convergence values.",
				},
				{
					functionDecl:"GetStereoLeftFloatingWindowParams()",
					returnType:"{keyframes...} ",
					description:" For the LEFT eye -> returns a dict (offset -> dict) of keyframe offsets and respective floating window params. Value at particular offset includes the left, right, top and bottom floating window values.",
				},
				{
					functionDecl:"GetStereoRightFloatingWindowParams()",
					returnType:"{keyframes...} ",
					description:" For the RIGHT eye -> returns a dict (offset -> dict) of keyframe offsets and respective floating window params. Value at particular offset includes the left, right, top and bottom floating window values.",
				},
				{
					functionDecl:"GetNumNodes()",
					returnType:"int",
					description:" Returns the number of nodes in the current graph for the timeline item",
				},
				{
					functionDecl:"ApplyArriCdlLut()",
					returnType:"Bool ",
					description:" Applies ARRI CDL and LUT. Returns True if successful, False otherwise.",
				},
				{
					functionDecl:"SetLUT(nodeIndex,lutPath)",
					returnType:"Bool ",
					description:" Sets LUT on the node mapping the node index provided, 1 <= nodeIndex <= total number of nodes. The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path). The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path). The operation is successful for valid lut paths that Resolve has already discovered (see Project.RefreshLUTList).",
				},
				{
					functionDecl:"GetLUT(nodeIndex)",
					returnType:"String ",
					description:" The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path). The operation is successful for valid lut paths that Resolve has already discovered (see Project.RefreshLUTList). Gets relative LUT path based on the node index provided, 1 <= nodeIndex <= total number of nodes.",
				},
				{
					functionDecl:"SetCDL([CDLmap])",
					returnType:"Bool ",
					description:" Keys of map are: \"NodeIndex\", \"Slope\", \"Offset\", \"Power\", \"Saturation\", where 1 <= NodeIndex <= total number of nodes. Example python code - SetCDL({\"NodeIndex\" : \"1\", \"Slope\" : \"0.5 0.4 0.2\", \"Offset\" : \"0.4 0.3 0.2\", \"Power\" : \"0.6 0.7 0.8\", \"Saturation\" : \"0.65\"})",
				},
				{
					functionDecl:"AddTake(mediaPoolItem,startFrame,endFrame)",
					returnType:"Bool ",
					description:" Example python code - SetCDL({\"NodeIndex\" : \"1\", \"Slope\" : \"0.5 0.4 0.2\", \"Offset\" : \"0.4 0.3 0.2\", \"Power\" : \"0.6 0.7 0.8\", \"Saturation\" : \"0.65\"}) Adds mediaPoolItem as a new take. Initializes a take selector for the timeline item if needed. By default, the full clip extents is added. startFrame (int) and endFrame (int) are optional arguments used to specify the extents.",
				},
				{
					functionDecl:"GetSelectedTakeIndex()",
					returnType:"int",
					description:" Returns the index of the currently selected take, or 0 if the clip is not a take selector.",
				},
				{
					functionDecl:"GetTakesCount()",
					returnType:"int",
					description:" Returns the number of takes in take selector, or 0 if the clip is not a take selector.",
				},
				{
					functionDecl:"GetTakeByIndex(idx)",
					returnType:"{takeInfo...}",
					description:" Returns a dict (keys \"startFrame\", \"endFrame\" and \"mediaPoolItem\") with take info for specified index.",
				},
				{
					functionDecl:"DeleteTakeByIndex(idx)",
					returnType:"Bool ",
					description:" Deletes a take by index, 1 <= idx <= number of takes.",
				},
				{
					functionDecl:"SelectTakeByIndex(idx)",
					returnType:"Bool ",
					description:" Selects a take by index, 1 <= idx <= number of takes.",
				},
				{
					functionDecl:"FinalizeTake()",
					returnType:"Bool ",
					description:" Finalizes take selection.",
				},
				{
					functionDecl:"CopyGrades([tgtTimelineItems])",
					returnType:"Bool ",
					description:" Copies the current grade to all the items in tgtTimelineItems list. Returns True on success and False if any error occurred.",
				},
				{
					functionDecl:"SetClipEnabled(Bool)",
					returnType:"Bool ",
					description:" Sets clip enabled based on argument.",
				},
				{
					functionDecl:"GetClipEnabled()",
					returnType:"Bool ",
					description:" Gets clip enabled status.",
				},
				{
					functionDecl:"UpdateSidecar()",
					returnType:"Bool ",
					description:" Updates sidecar file for BRAW clips or RMD file for R3D clips.",
				},
				{
					functionDecl:"GetUniqueId()",
					returnType:"string ",
					description:" Returns a unique ID for the timeline item",
				},
				{
					functionDecl:"LoadBurnInPreset(presetName)",
					returnType:"Bool ",
					description:" Loads user defined data burn in preset for clip when supplied presetName (string). Returns true if successful.",
				},
				{
					functionDecl:"GetNodeLabel(nodeIndex)",
					returnType:"string ",
					description:" Returns the label of the node at nodeIndex.",
				},
				{
					functionDecl:"CreateMagicMask(mode)",
					returnType:"Bool ",
					description:" Returns True if magic mask was created successfully, False otherwise. mode can \"F\" (forward), \"B\" (backward), or \"BI\" (bidirection)",
				},
				{
					functionDecl:"RegenerateMagicMask()",
					returnType:"Bool ",
					description:" Returns True if magic mask was regenerated successfully, False otherwise.",
				},
				{
					functionDecl:"Stabilize()",
					returnType:"Bool ",
					description:" Returns True if stabilization was successful, False otherwise",
				},
				{
					functionDecl:"SmartReframe()",
					returnType:"Bool ",
					description:" Performs Smart Reframe. Returns True if successful, False otherwise.",
				},
			],
		},
		{
			section: "Gallery",
			apis: [
				{
					functionDecl:"GetAlbumName(galleryStillAlbum)",
					returnType:"string ",
					description:" Returns the name of the GalleryStillAlbum object 'galleryStillAlbum'.",
				},
				{
					functionDecl:"SetAlbumName(galleryStillAlbum,albumName)",
					returnType:"Bool ",
					description:" Sets the name of the GalleryStillAlbum object 'galleryStillAlbum' to 'albumName'.",
				},
				{
					functionDecl:"GetCurrentStillAlbum()",
					returnType:"galleryStillAlbum",
					description:" Returns current album as a GalleryStillAlbum object.",
				},
				{
					functionDecl:"SetCurrentStillAlbum(galleryStillAlbum)",
					returnType:"Bool ",
					description:" Sets current album to GalleryStillAlbum object 'galleryStillAlbum'.",
				},
				{
					functionDecl:"GetGalleryStillAlbums()",
					returnType:"[galleryStillAlbum] ",
					description:" Returns the gallery albums as a list of GalleryStillAlbum objects.",
				},
			],
		},
		{
			section: "GalleryStillAlbum",
			apis: [
				{
					functionDecl:"GetStills()",
					returnType:"[galleryStill] ",
					description:" Returns the list of GalleryStill objects in the album.",
				},
				{
					functionDecl:"GetLabel(galleryStill)",
					returnType:"string ",
					description:" Returns the label of the galleryStill.",
				},
				{
					functionDecl:"SetLabel(galleryStill,label)",
					returnType:"Bool ",
					description:" Sets the new 'label' to GalleryStill object 'galleryStill'.",
				},
				{
					functionDecl:"ExportStills([galleryStill],folderPath,filePrefix,format)",
					returnType:"Bool",
					description:" Exports list of GalleryStill objects '[galleryStill]' to directory 'folderPath', with filename prefix 'filePrefix', using file format 'format' (supported formats: dpx, cin, tif, jpg, png, ppm, bmp, xpm).",
				},
				{
					functionDecl:"DeleteStills([galleryStill])",
					returnType:"Bool ",
					description:" Deletes specified list of GalleryStill objects '[galleryStill]'.",
				},
			],
		},
	],
};
