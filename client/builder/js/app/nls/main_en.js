//>>built
define({"builder/nls/builder":{common:{ok:"OK",cancel:"Cancel",save:"Save",doNotSave:"Don't Save",saved:"Saved",saving:"Saving",widgetName:"Widget Name",emptyMessage:"Please select widget.",chooseWidget:"Choose Widget",deleting:"Deleting",duplicating:"Duplicating",uploading:"Uploading",updating:"Updating"},apps:{welcomeMessage:"Welcome to Web AppBuilder for ArcGIS!",appCreate:"Create New",appCreateTitle:"Create a New App",appUpload:"Upload",appImport:"Import",appName:"App Name",appDesc:"Description",
appTime:"Date modified",appModified:"Modified by",appCreator:"Creator",importTips:"Import an app from your ArcGIS portal",importApp:"Import App",upgradeApp:"Upgrade App",upgradeBtn:"Upgrade",checkVersionError:"Failed to import the app ${APP_NAME} ! Please refer to the log for details.",importing:"Importing",upgrading:"Upgrading",upgradeContent:"This is an app created by older version ${OLD_VERSION} of Web AppBuilder. You need to upgrade it to version ${LATEST_VERSION} before it is used in this Web AppBuilder.",
upgradeContentFooter:"Click Upgrade to upgrade and import it. Click Cancel to quit.",importUpperVersion:"Failed to import the app ${APP_NAME} . This app is created by a newer version ${VERSION_NUMBER} of Web AppBuilder.",importSuccess:"Upgrade and import the app ${APP_NAME} successfully!",upgradeFailure:"Failed to upgrade the app ${APP_NAME}! Please refer to the log for details.",importFailure:"Failed to import the app ${APP_NAME}! Please refer to the log for details.",edit:"Edit",launch:"Launch",
createFromHere:"Create from here",remove:"Remove",deleteMenu:"Delete",duplicate:"Duplicate",editAppInfo:"Edit App Info",download:"Download",agolTemp:"Export as Template",createAppFailedMeg:"Failed to create app.",noAppName:"App name is required.",confirmDeleteApp:"Are you sure you want to delete this app?",deleteAppTitle:"Delete App",downloadFailedTip:"Failed to download app. Please try again.",savePublish:"Fill in the information below to save and publish your web application. View the item details of this web mapping application to see the URL to the application.",
appBuilderMsg:"Let us help you get started",appBuilderTitle:"Web AppBuilder for ArcGIS",templateTitle:"You are going to export current parameter settings and create a new web app template item in your portal.",explain1:"Exported template item will use the default app URL from Web AppBuilder. If you deploy this app to another web server, you need to change this URL in the item\u2019s details page.",titleLabel:"Title:",tagsLabel:"Tags:",summaryLabel:"Description:",saveFolderLabel:"Save in folder:",
shareSameLevel:"Share this app in the same way as the map",createAppUrlError:"App successfully created, but sharing app failed.",saveAsFaied:"Save as failed.",deleteFalse:"Failed to remove the app. The response of removeApp is 'unsuccess'!",deleteError:"Failed to remove the app.",duplicateFalse:"Failed to duplicate the app. The response of duplicate is 'unsuccess'!",duplicateError:"Failed to duplicate the app.",editAppFalse:"The response of updateApp is 'unsuccess'.",editAppTrue:"Updated app successfully, the app id is ",
editError:"Failed to update 'app name' or 'app description'!",addTags:"Add tag(s)",_copy:"-copy",noTitleMessage:"You must provide a title for your template and tags to allow your template to be found through searches.",exportTemplateFailed1:"Export failed when add templateItem to portal.",exportTemplateFailed2:"Export failed when get templateGroup from portal.",exportTemplateFailed3:"Exported successfully! However, the exported template item is not shared to the \u201cWeb App Templates\u201d group. You need to manually share it to the group to be available for making apps from it.",
exportTemplateFailed4:"Exported successfully! However, share item to templateGroup failed.",exportTemplateFailed5:"Export failed when get potral user.",exportTemplateFailed31:"Exported successfully! However, it seems that you don\u2019t have permission to share your exported template",exportTemplateFailed32:"to the template group specified in your organization. You need to manually add it to the group once it is accessible.",descriptionTemplateUrl1:"Click",descriptionTemplateUrl2:"here",descriptionTemplateUrl21:"item",
descriptionTemplateUrl3:"to see details of the exported template.",exportSuccessful:"Exported as web app template successfully.",exportMessageTitle:"Export as Web App Template",templateDefaultSnippet:"A configurable application template generated by Web AppBuilder.",exportSuccessfulUpdate:"Update web app template successfully.",exportMessageTitleUpdate:"Update Web App Template",exportTemplateFailed6:"Update failed while getting potral user.",exportTemplateFailed7:"Update template item failed."},header:{appDefaultAttributes:"App Default Attributes",
help:"Help",settings:"Settings",signIn:"Sign In",signOut:"Sign Out",saveSuccessfully:"Saved successfully !",saveFailed:"Failed to save app.",home:"Home",gallery:"Gallery",map:"Map",groups:"Groups",content:"My Content",organization:"My Organization",logoTitle:"Web AppBuilder for ArcGIS",profile:"Profile",backToHomePage:"Back to home page"},settings:{settings:"Set App Default Attributes",lSettings:"Set App Attributes",showAdSetting:"+ Show advanced settings",hideAdSetting:"Hide advanced settings...",
bingMapKey:"Bing Maps Key",bingMapId:"Bing Maps ID",defaultPortalUrl:"Default Portal URL",portalUrl:"Portal URL",geometryServiceUrl:"Geometry Service URL",geometryServiceError:"The geometry service URL you have entered is invalid or inaccessible.",routeServiceUrl:"Route Service URL",geocodeServiceUrl:"Geocode Service URL",printTaskUrl:"Print Task URL",httpProxyUrl:"HTTP Proxy URL",appId:"App ID",locale:"Locale",save:"Save",themeRepo:"Theme Repository",widgetRepo:"Widget Repository",loadHelperServices:"Load helper services",
loadServiceError:"The portal URL is invalid. Portal URL is normally in this pattern: http(s)://www.arcgis.com/ or http(s)://\x26lt;portal_server\x26gt;/\x26lt;instance_name\x26gt;",webMapError:"Can't get a default web map from portalUrl",helpText:{bingMapKey:"The Bing Maps key is required for accessing Bing Maps and Bing geocoder.",defaultPortalUrl:"The URL of ArcGIS Online or your local Portal for ArcGIS.",geometryServiceUrl:"The geometry service used by certain widgets to do geometry operations.",
geocodeServiceUrl:"The geocode service used by certain widgets to do geocoding operation.",routeServiceUrl:"The route service used by certain widgets to do routing operation.",printTaskUrl:"The print task used by certain widgets to do print operation.",httpProxyUrl:"An HTTP proxy is required when accessing content that is either secure or hosted on a server different from your application (cross domain issue).",locale:"Locale used for your web app.",appId:"The ID used in the app to Sign in to ArcGIS Online by OAuth2 authorization.",
themeRepo:"Repository of themes used in Web AppBuilder.",widgetRepo:"Repository of widgets used in Web AppBuilder."}},leftPane:{themes:"Themes",map:"Map",widgets:"Widgets",attributes:"Attributes",width:"Width",height:"Height",selectDevice:"Select a device to preview or customize above",share:"Share",previewMore:"Previews",back2Configure:"Configure",unSaveMegBegin:"Want to save your changes to ",unSaveMegEnd:"?",canNotSaveMeg:"This is a try-only version of Web AppBuilder for ArcGIS. To create and save your application by Web AppBuilder for ArcGIS, you need to login to your orgnization.",
saveSuccessMeg:"Saved successfully",saveFailedMeg:"Save App Failed",toHomeTitle:"Web AppBuilder for ArcGIS",saveAs:"Save As",launch:"Launch",unloadMessage:"you are working on has unsaved changes.",theApp:"The application",qrcodeDesc:"Scan QR code to view application on your mobile device"},themes:{themeTitle:"Themes",styleTitle:"Style",layoutTitle:"Layout",appLayout:"App's Layout",themeChangeMessage:"Only widgets configured in the controller will be inherited to the new theme. You have to review and re-configure on-screen widgets in the new theme. Continue?"},
mapConfig:{map:"Map",selectWebMap:"Choose Web Map",searchMapName:"Search by map name...",searchNone:"We couldn't find what you were looking for. Please try another one.",groups:"Groups",noneGroups:"No groups",signInTip:"Your login session has expired. Please refresh your browser to sign in to your portal again.",signIn:"Sign in",publicMap:"Public",myOrganization:"My Organization",myGroup:"My Groups",myContent:"My Content",setExtentTip:'Navigate to proper extent from the map on the right side and click "Set Initial Extent" button here to set the app\u2019s initial map extent.',
setExtent:"Set Initial Extent",count:"Count",fromPortal:"from Portal",fromOnline:"from ArcGIS.com",noneThumbnail:"Thumbnail not available",changeMap:"Choose Web Map",owner:"Owner",signInTo:"Sign in to",lastModified:"Last Modified",moreDetails:"More Details",originalExtentTip:"Restore to web map's original extent",setInitialExtent:"Use Current Map View",restoreInitialExtent:"Use Web Map's Default Extent",statement:"Specify the initial spatial extent of the map when the application starts up.",mapSwitchConfimation:"Map Switch Confirmation",
mapSwitchConfimationTip:"You are switching to a new map. Widgets configured for the previous map may not be valid. If they are not valid, the default widget configuration is applied. You should review these widgets and re-configure them if needed. If you switch back to the previous map, the associated widget configurations will be restored.",theseWidgetsAre:"These widgets are",sureToSwitch:"Are you sure to switch to this web map?",clickChooseWebMap:"Click to choose web map",viewItemDetails:"View item details"},
widgets:{openAtStart:"Open at start",jsonEditor:"JSON Editor",back:"Back",widgetLabel:"Widget Label",changeIcon:"change widget icon",more:"Learn more about this widget",dropWidgetMessage:"Are you sure to remove this widget?",dropGroupMessage:"Are you sure to remove this group?",setControlledWidgets:"Set the widgets in this controller",setControlledWidgetsBy:"Set widgets managed by ",noConfig:"No more configuration.",notFinished:"Not finish yet!",labelExists:"Label exists",configLabel:"Configure",
labelRequired:"Label required",widgets:"Widgets",defaultWidgetLabel:"Widget",addWidget:"Click here to add widget",hideWidget:"Hide this widget",showWidget:"Show this widget",removeWidget:"Remove this widget",configureWidget:"Configure this widget"},groups:{label:"Label",newGroup:"New Group"},attributes:{headerTitle:"Branding",headerDesc:"Add LOGO, title, or subtitle for your app.",addLogo:"Click here to add a LOGO",title:"Title",subtitle:"Subtitle",appIdTitle:"App ID",appIdAbout:"About",linksTitle:"Links",
addLink:"Add New Link",proxyUrlPlaceholder:"Double click to edit proxy URL",prefixPlaceholder:"Double click to edit prefix",prefixHeader:"Prefix",proxyUrlHeader:"Proxy URL",labelPlaceholder:"Double click to edit link name",urlPlaceholder:"Double click to edit link URL",proxySetting:"Proxy Setting",proxyRulesLabel:"Specify proxy rules to route your application requests: ",alwaysUseProxyLabel:"Use the following proxy for all requests that don't match above rules: ",addProxyRule:"Add New Proxy Rule",
useProxySetting:"Use Proxy",proxyUrl:"Proxy URL",editLabel:"Edit",deleteLabel:"Delete"},serviceUtils:{duplicateError:"Failed to duplicate app.",duplicateUrlError:"App successfully duplicated, but failed to update URL.",addItemError:"Failed to Add Item.",addItemUnsuccess:"AddItem responses unsuccessfully",createUrlError:"App successfully created, but failed to update URL.",createError:"Failed to create app.",createCodeAttachmentError:'App successfully created, but failed to add "Code Attachment".'},
setPortalUrl:{tip:"Specify the URL to your organization or Portal for ArcGIS",continueBtn:"Continue",example:"Example",faq:"FAQs",errPrefix:"Unable to access ",errRemind:"A server with the specified hostname could not be found",errOrg:"Please input a full URL of your ArcGIS Online organization, for example, http://myorg.maps.arcgis.com"},portalSignIn:{errorMessage:"Incorrect username or password",portalError:"Portal Error",username:"Username",password:"Password",forgot:"Forgot password",remember:"Remember username and password",
signin:"Sign in",back:"Back",con:"Continue",namedUserTip:"Web AppBuilder for ArcGIS does not support public account. Please login using an organizational account.",signingIn:"Signing in",registeringAppID:"Registering App ID",here:"here",appIdTip1:"Since this is the first time for Web AppBuilder to work with the organization or portal you just specified, an App ID is required to support OAuth2 signin process.",appIdTip2:"Provide your username and password for your organization or portal. Once succeeded, Web AppBuilder will auto-register an App ID, along with a new web mapping application item named 'Web AppBuilder for ArcGIS' in My Content. Please don't delete or change the item. For more information about registering App ID, refer "},
agolTemplate:{title:"Set Configurable Parameters",title2:"Export as Web App Template",rightPartHead:"Set configurable parameters to the template",rightPartSubhead:"Parameter Categories",rightPartHead2:"Template JSON Code",viewJsonCode:"View JSON Code",viewJsonBack:"Back to Settings",ok:"OK",save:"Save",download:"Export",update:"Update",unSaveMeg:"Want to save your changes?",cancelPopupTitle:"Webmap App Template",saveSuccessMeg:"Saved successfully",appNameTitle:"App Name: ",exportTitle:"Export As Template",
fieldLabel:"Field Label:",fieldType:"Field Type:",typeSelectString:"String",typeSelectBoolean:"Boolean",typeSelectNumber:"Number",typeSelectOptions:"Options",tooltip:"Tooltip:",placeholder:"Placeholder:",textBoxType:"Text Box Type:",textBoxTypeRichtext:"richtext",textBoxTypeTextarea:"textarea",textBoxTypeTextbox:"textbox",minvalue:"Min Value:",maxvalue:"Max Value:",places:"Places:",addNewOption:"Add a New Option",label:"Label:",value:"Value:"},_localized:{}}});