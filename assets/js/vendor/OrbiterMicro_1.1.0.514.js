//==============================================================================  
// OrbiterMicro_1.1.0.514_Release
// www.unionplatform.com
// Release Date: 16-October-2011
// (c) Copyright USER1 Subsystems Corporation
//==============================================================================

(function (globalObject) {
//==============================================================================
// PACKAGE MANAGEMENT
//==============================================================================

// JSDOC helpers

/** @namespace 
    @name net
    @private */
/** @namespace 
    @name net.user1
    @private */
/** @namespace 
    @name net.user1.events
    @private */
/** @namespace 
    @name net.user1.logger
    @private */
/** @namespace 
    @name net.user1.orbiter
 */
/** @namespace 
    @name net.user1.utils
 */

// create utils package
if (typeof globalObject.net == "undefined") {
  globalObject.net = {};
}
var net = globalObject.net;
net.user1 = net.user1 ? net.user1 : {};
net.user1.utils = net.user1.utils ? net.user1.utils : {};

//  Convenience method to create packages
/** @function */
net.user1.utils.createPackage = function (packageName) {
  var parts = packageName.split(".");
  var part = globalObject;
  
  for (var i = 0; i < parts.length; i++) {
    part = part[parts[i]] === undefined ? (part[parts[i]] = {}) : part[parts[i]];
  }
};
//==============================================================================
// PACKAGE DECLARATIONS
//==============================================================================
net.user1.utils.createPackage("net.user1.logger");
net.user1.utils.createPackage("net.user1.events");
net.user1.utils.createPackage("net.user1.orbiter");
net.user1.utils.createPackage("net.user1.utils");
/** @function */
net.user1.utils.extend = function (subclass, superclass) {
  function superclassConstructor () {};
  superclassConstructor.prototype = superclass.prototype;
  subclass.superclass = superclass.prototype;
  subclass.prototype = new superclassConstructor();
  subclass.prototype.constructor = subclass;
};
//==============================================================================
// ABSTRACT ERROR FUNCTION
//==============================================================================

// JSDOC helpers

/** @private */
net.user1.utils.abstractError = function () {
  throw new Error("Could not invoke abstract method. This method must be implemented by a subclass.");
};
//==============================================================================
// A COLLECTION OF ARRAY UTILITIES
//==============================================================================
/** @class */
net.user1.utils.ArrayUtil = new Object();

net.user1.utils.ArrayUtil.indexOf = function (arr, obj) {
  if (arr.indexOf ) {
    return arr.indexOf(obj);
  }

  for (var i = arr.length; --i >= 0; ) {
    if (arr[i] === obj) {
      return i;
    }
  }
  
  return -1;
};

net.user1.utils.ArrayUtil.remove = function (array, item) {
  var itemIndex;
  
  if (item == null) {
    return false;
  } else {
    itemIndex = net.user1.utils.ArrayUtil.indexOf(array, item);
    if (itemIndex == -1) {
      return false;
    } else {
      array.splice(itemIndex, 1);
      return true;
    }
  }
};

net.user1.utils.ArrayUtil.isArray = function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
//==============================================================================
// UPC CONSTANTS
//==============================================================================
/** @class */
net.user1.orbiter.UPC = new Object();

// CLIENT TO SERVER
/** @constant */
net.user1.orbiter.UPC.SEND_MESSAGE_TO_ROOMS = "u1";            
/** @constant */
net.user1.orbiter.UPC.SEND_MESSAGE_TO_CLIENTS = "u2";            
/** @constant */
net.user1.orbiter.UPC.SET_CLIENT_ATTR = "u3";       
/** @constant */
net.user1.orbiter.UPC.JOIN_ROOM = "u4";             
/** @constant */
net.user1.orbiter.UPC.SET_ROOM_ATTR = "u5";         
/** @constant */
net.user1.orbiter.UPC.LEAVE_ROOM = "u10";           
/** @constant */
net.user1.orbiter.UPC.CREATE_ACCOUNT = "u11"; 
/** @constant */
net.user1.orbiter.UPC.REMOVE_ACCOUNT = "u12";
/** @constant */
net.user1.orbiter.UPC.CHANGE_ACCOUNT_PASSWORD = "u13";
/** @constant */
net.user1.orbiter.UPC.LOGIN = "u14";            
/** @constant */
net.user1.orbiter.UPC.GET_CLIENTCOUNT_SNAPSHOT = "u18";                
/** @constant */
net.user1.orbiter.UPC.SYNC_TIME = "u19";
/** @constant */
net.user1.orbiter.UPC.GET_ROOMLIST_SNAPSHOT = "u21";
/** @constant */
net.user1.orbiter.UPC.CREATE_ROOM = "u24";                       
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROOM = "u25";                       
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_ROOMS = "u26";            
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_ROOMS = "u27"; 
/** @constant */
net.user1.orbiter.UPC.GET_ROOM_SNAPSHOT = "u55";
/** @constant */
net.user1.orbiter.UPC.SEND_MESSAGE_TO_SERVER = "u57"; 
/** @constant */
net.user1.orbiter.UPC.OBSERVE_ROOM = "u58"; 
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_ROOM = "u61"; 
/** @constant */
net.user1.orbiter.UPC.SET_ROOM_UPDATE_LEVELS = "u64"; 
/** @constant */
net.user1.orbiter.UPC.CLIENT_HELLO = "u65"; 
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROOM_ATTR = "u67"; 
/** @constant */
net.user1.orbiter.UPC.REMOVE_CLIENT_ATTR = "u69"; 
/** @constant */
net.user1.orbiter.UPC.SEND_ROOMMODULE_MESSAGE = "u70"; 
/** @constant */
net.user1.orbiter.UPC.SEND_SERVERMODULE_MESSAGE = "u71"; 
/** @constant */
net.user1.orbiter.UPC.TERMINATE_SESSION = "u83";
/** @constant */
net.user1.orbiter.UPC.LOGOFF = "u86";  
/** @constant */
net.user1.orbiter.UPC.GET_CLIENTLIST_SNAPSHOT = "u91";  
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_CLIENTS = "u92";  
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_CLIENTS = "u93";  
/** @constant */
net.user1.orbiter.UPC.GET_CLIENT_SNAPSHOT = "u94";  
/** @constant */
net.user1.orbiter.UPC.OBSERVE_CLIENT = "u95";  
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_CLIENT = "u96";  
/** @constant */
net.user1.orbiter.UPC.GET_ACCOUNTLIST_SNAPSHOT = "u97";  
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_ACCOUNTS = "u98";  
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_ACCOUNTS = "u99";  
/** @constant */
net.user1.orbiter.UPC.GET_ACCOUNT_SNAPSHOT = "u100";  
/** @constant */
net.user1.orbiter.UPC.OBSERVE_ACCOUNT = "u121";  
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_ACCOUNT = "u122"; 
/** @constant */
net.user1.orbiter.UPC.ADD_ROLE = "u133";  
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROLE = "u135";  
/** @constant */
net.user1.orbiter.UPC.KICK_CLIENT = "u149";  
/** @constant */
net.user1.orbiter.UPC.BAN = "u137";  
/** @constant */
net.user1.orbiter.UPC.UNBAN = "u139";  
/** @constant */
net.user1.orbiter.UPC.GET_BANNED_LIST_SNAPSHOT = "u141";  
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_BANNED_ADDRESSES = "u143";  
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_BANNED_ADDRESSES = "u145";  

// SERVER TO CLIENT
/** @constant */
net.user1.orbiter.UPC.JOINED_ROOM = "u6";
/** @constant */
net.user1.orbiter.UPC.RECEIVE_MESSAGE = "u7";
/** @constant */
net.user1.orbiter.UPC.CLIENT_ATTR_UPDATE = "u8";
/** @constant */
net.user1.orbiter.UPC.ROOM_ATTR_UPDATE = "u9";
/** @constant */
net.user1.orbiter.UPC.CLIENT_METADATA = "u29";
/** @constant */
net.user1.orbiter.UPC.CREATE_ROOM_RESULT = "u32";
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROOM_RESULT = "u33";
/** @constant */
net.user1.orbiter.UPC.CLIENTCOUNT_SNAPSHOT = "u34";
/** @constant */
net.user1.orbiter.UPC.CLIENT_ADDED_TO_ROOM = "u36";
/** @constant */
net.user1.orbiter.UPC.CLIENT_REMOVED_FROM_ROOM = "u37";
/** @constant */
net.user1.orbiter.UPC.ROOMLIST_SNAPSHOT = "u38";
/** @constant */
net.user1.orbiter.UPC.ROOM_ADDED = "u39";
/** @constant */
net.user1.orbiter.UPC.ROOM_REMOVED = "u40";
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_ROOMS_RESULT = "u42";
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_ROOMS_RESULT = "u43";
/** @constant */
net.user1.orbiter.UPC.LEFT_ROOM = "u44";
/** @constant */
net.user1.orbiter.UPC.CHANGE_ACCOUNT_PASSWORD_RESULT = "u46";
/** @constant */
net.user1.orbiter.UPC.CREATE_ACCOUNT_RESULT = "u47";
/** @constant */
net.user1.orbiter.UPC.REMOVE_ACCOUNT_RESULT = "u48";
/** @constant */
net.user1.orbiter.UPC.LOGIN_RESULT = "u49";
/** @constant */
net.user1.orbiter.UPC.SERVER_TIME_UPDATE = "u50";
/** @constant */
net.user1.orbiter.UPC.ROOM_SNAPSHOT = "u54";
/** @constant */
net.user1.orbiter.UPC.OBSERVED_ROOM = "u59";
/** @constant */
net.user1.orbiter.UPC.GET_ROOM_SNAPSHOT_RESULT = "u60";
/** @constant */
net.user1.orbiter.UPC.STOPPED_OBSERVING_ROOM = "u62";
/** @constant */
net.user1.orbiter.UPC.CLIENT_READY = "u63";
/** @constant */
net.user1.orbiter.UPC.SERVER_HELLO = "u66";
/** @constant */
net.user1.orbiter.UPC.JOIN_ROOM_RESULT = "u72";
/** @constant */
net.user1.orbiter.UPC.SET_CLIENT_ATTR_RESULT = "u73";
/** @constant */
net.user1.orbiter.UPC.SET_ROOM_ATTR_RESULT = "u74";
/** @constant */
net.user1.orbiter.UPC.GET_CLIENTCOUNT_SNAPSHOT_RESULT = "u75";
/** @constant */
net.user1.orbiter.UPC.LEAVE_ROOM_RESULT = "u76";
/** @constant */
net.user1.orbiter.UPC.OBSERVE_ROOM_RESULT = "u77";
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_ROOM_RESULT = "u78";
/** @constant */
net.user1.orbiter.UPC.ROOM_ATTR_REMOVED = "u79";
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROOM_ATTR_RESULT = "u80";
/** @constant */
net.user1.orbiter.UPC.CLIENT_ATTR_REMOVED = "u81";
/** @constant */
net.user1.orbiter.UPC.REMOVE_CLIENT_ATTR_RESULT = "u82";
/** @constant */
net.user1.orbiter.UPC.SESSION_TERMINATED = "u84";
/** @constant */
net.user1.orbiter.UPC.SESSION_NOT_FOUND = "u85";
/** @constant */
net.user1.orbiter.UPC.LOGOFF_RESULT = "u87";
/** @constant */
net.user1.orbiter.UPC.LOGGED_IN = "u88";
/** @constant */
net.user1.orbiter.UPC.LOGGED_OFF = "u89";
/** @constant */
net.user1.orbiter.UPC.ACCOUNT_PASSWORD_CHANGED = "u90";
/** @constant */
net.user1.orbiter.UPC.CLIENTLIST_SNAPSHOT = "u101";
/** @constant */
net.user1.orbiter.UPC.CLIENT_ADDED_TO_SERVER = "u102";
/** @constant */
net.user1.orbiter.UPC.CLIENT_REMOVED_FROM_SERVER = "u103";
/** @constant */
net.user1.orbiter.UPC.CLIENT_SNAPSHOT = "u104";
/** @constant */
net.user1.orbiter.UPC.OBSERVE_CLIENT_RESULT = "u105";
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_CLIENT_RESULT = "u106";
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_CLIENTS_RESULT = "u107";
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_CLIENTS_RESULT = "u108";
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_ACCOUNTS_RESULT = "u109";
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_ACCOUNTS_RESULT = "u110";
/** @constant */
net.user1.orbiter.UPC.ACCOUNT_ADDED = "u111";
/** @constant */
net.user1.orbiter.UPC.ACCOUNT_REMOVED = "u112";
/** @constant */
net.user1.orbiter.UPC.JOINED_ROOM_ADDED_TO_CLIENT = "u113";
/** @constant */
net.user1.orbiter.UPC.JOINED_ROOM_REMOVED_FROM_CLIENT = "u114";
/** @constant */
net.user1.orbiter.UPC.GET_CLIENT_SNAPSHOT_RESULT = "u115";
/** @constant */
net.user1.orbiter.UPC.GET_ACCOUNT_SNAPSHOT_RESULT = "u116";
/** @constant */
net.user1.orbiter.UPC.OBSERVED_ROOM_ADDED_TO_CLIENT = "u117";
/** @constant */
net.user1.orbiter.UPC.OBSERVED_ROOM_REMOVED_FROM_CLIENT = "u118";
/** @constant */
net.user1.orbiter.UPC.CLIENT_OBSERVED = "u119";
/** @constant */
net.user1.orbiter.UPC.STOPPED_OBSERVING_CLIENT = "u120";
/** @constant */
net.user1.orbiter.UPC.OBSERVE_ACCOUNT_RESULT = "u123";
/** @constant */
net.user1.orbiter.UPC.ACCOUNT_OBSERVED = "u124";
/** @constant */
net.user1.orbiter.UPC.STOP_OBSERVING_ACCOUNT_RESULT = "u125";
/** @constant */
net.user1.orbiter.UPC.STOPPED_OBSERVING_ACCOUNT = "u126";
/** @constant */
net.user1.orbiter.UPC.ACCOUNT_LIST_UPDATE = "u127";
/** @constant */
net.user1.orbiter.UPC.UPDATE_LEVELS_UPDATE = "u128";
/** @constant */
net.user1.orbiter.UPC.CLIENT_OBSERVED_ROOM = "u129";
/** @constant */
net.user1.orbiter.UPC.CLIENT_STOPPED_OBSERVING_ROOM = "u130";
/** @constant */
net.user1.orbiter.UPC.ROOM_OCCUPANTCOUNT_UPDATE = "u131";
/** @constant */
net.user1.orbiter.UPC.ROOM_OBSERVERCOUNT_UPDATE = "u132";
/** @constant */
net.user1.orbiter.UPC.ADD_ROLE_RESULT = "u134";
/** @constant */
net.user1.orbiter.UPC.REMOVE_ROLE_RESULT = "u136";
/** @constant */
net.user1.orbiter.UPC.BAN_RESULT = "u138";
/** @constant */
net.user1.orbiter.UPC.UNBAN_RESULT = "u140";
/** @constant */
net.user1.orbiter.UPC.BANNED_LIST_SNAPSHOT = "u142";
/** @constant */
net.user1.orbiter.UPC.WATCH_FOR_BANNED_ADDRESSES_RESULT = "u144";
/** @constant */
net.user1.orbiter.UPC.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT = "u146";
/** @constant */
net.user1.orbiter.UPC.BANNED_ADDRESS_ADDED = "u147";
/** @constant */
net.user1.orbiter.UPC.BANNED_ADDRESS_REMOVED = "u148";
/** @constant */
net.user1.orbiter.UPC.KICK_CLIENT_RESULT = "u150";
//==============================================================================
// MESSAGE CONSTANTS
//==============================================================================
/** @class */
net.user1.orbiter.Messages = new Object();
/** @constant */
net.user1.orbiter.Messages.CLIENT_HEARTBEAT = "CLIENT_HEARTBEAT";
//==============================================================================
// RECEIVE MESSAGE BROADCAST TYPE CONSTANTS
//==============================================================================
/** @class
    @private */
net.user1.orbiter.ReceiveMessageBroadcastType = new Object();
net.user1.orbiter.ReceiveMessageBroadcastType.TO_SERVER  = "0";
net.user1.orbiter.ReceiveMessageBroadcastType.TO_ROOMS   = "1";
net.user1.orbiter.ReceiveMessageBroadcastType.TO_CLIENTS = "2";
//==============================================================================
// ROOM ID PARSING UTILITIES
//==============================================================================
/** @class */
net.user1.orbiter.RoomIDParser = new Object();

net.user1.orbiter.RoomIDParser.getSimpleRoomID = function (fullRoomID) {
  if (fullRoomID.indexOf(".") == -1) {
    return fullRoomID;
  } else {
    return fullRoomID.slice(fullRoomID.lastIndexOf(".")+1);
  }
};

net.user1.orbiter.RoomIDParser.getQualifier = function (fullRoomID) {
  if (fullRoomID.indexOf(".") == -1) {
    return "";
  } else {
    return fullRoomID.slice(0, fullRoomID.lastIndexOf("."));
  }
};

net.user1.orbiter.RoomIDParser.splitID = function (fullRoomID) {
  return [getQualifier(fullRoomID), getSimpleRoomID(fullRoomID)];
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.utils.UDictionary = function () {
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================
net.user1.utils.UDictionary.prototype.length = function () {
  var len = 0;
  for (var p in this) {
    len++;
  } 
  return len;
}
//==============================================================================
// TOKEN CONSTANTS
//==============================================================================
/** @class
    @private */
net.user1.orbiter.Tokens = new Object();

/** @private */
net.user1.orbiter.Tokens.RS = "|";  
/** @private */
net.user1.orbiter.Tokens.GLOBAL_ATTR = "";  
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.orbiter.System = function (window) {
  this.window = window;
  this.clientType     = "OrbiterMicro";
  this.clientVersion  = new net.user1.orbiter.VersionNumber(1,1,0,514);
  this.upcVersion     = new net.user1.orbiter.VersionNumber(1,9,3);
}

//==============================================================================
// INSTANCE METHODS
//==============================================================================  
net.user1.orbiter.System.prototype.getClientType = function () {
  return this.clientType;
}

/** @returns net.user1.orbiter.VersionNumber */
net.user1.orbiter.System.prototype.getClientVersion = function () {
  return this.clientVersion;
}
    
/** @returns net.user1.orbiter.VersionNumber */
net.user1.orbiter.System.prototype.getUPCVersion = function () {
  return this.upcVersion;
}
    
/** @returns Boolean */
net.user1.orbiter.System.prototype.isJavaScriptCompatible = function () {
  // Assume non-browser environments can do cross-origin XMLHttpRequests
  if (this.window == null && typeof XMLHttpRequest != "undefined") {
    return true;
  }
  
  if (this.window != null) {
    // Standards-based browsers that support cross-origin requests
    if (typeof XMLHttpRequest != "undefined" 
        && typeof new XMLHttpRequest().withCredentials != "undefined") {
        return true;
    }
  
    // Versions of IE that support proprietary cross-origin requests
    if (typeof XDomainRequest != "undefined" 
        && this.window.location.protocol != "file:") {
      return true;
    }

    // Browsers that can communicate between windows
    if (this.window.postMessage != null) {
      return true;
    }
  }
  
  // This environment has no way to connect to Union Server
  return false;
}

/** 
 * <p>
 * Returns true if the host environment supports direct cross-origin HTTP
 * requests using CORS (see: <a href="http://www.w3.org/TR/cors/">http://www.w3.org/TR/cors/</a>).
 * When hasHTTPDirectConnection() returns true, then Orbiter can safely use
 * the HTTPDirectConnection class to communicate with Union Server over HTTP. When
 * hasHTTPDirectConnection() returns false, Orbiter cannot use
 * HTTPDirectConnection, and must instead use the HTTPIFrameConnection class to
 * communicate with Union Server over HTTP. 
 * </p>
 * 
 * <p>
 * Note that Orbiter applications that use Orbiter's connect() or setServer()
 * methods to connect to Union Server do not need to perform a capabilities check
 * via hasHTTPDirectConnection(). The connect() and setServer() methods check
 * the host environment's capabilities automatically, and choose the appropriate
 * connection type for the environment. The hasHTTPDirectConnection() method is 
 * required in one situation only: when the application explicitly wishes to 
 * communicate over HTTP without trying a WebSocket connection first.
 * </p>
 * 
 * @returns Boolean 
 * 
 * @see net.user1.orbiter.HTTPDirectConnection
 * @see net.user1.orbiter.HTTPIFrameConnection
 * @see net.user1.orbiter.Orbiter#connect
 * @see net.user1.orbiter.Orbiter#setServer
 **/
net.user1.orbiter.System.prototype.hasHTTPDirectConnection = function() {
  // -If XHR has a "withCredentials" flag then CORS is supported.
  // -In IE, if XDomainRequest is available, and the file wasn't loaded 
  //    locally, then CORS is supported
  // -In non-browser environments, assume cross-origin XMLHttpRequests are allowed
  if ((typeof XMLHttpRequest != "undefined" && typeof new XMLHttpRequest().withCredentials != "undefined")
       || (typeof XDomainRequest != "undefined" && this.window != null && this.window.location.protocol != "file:")
       || (this.window == null && typeof XMLHttpRequest != "undefined")) {
    return true;
  } else {
    return false;
  }
}

/** 
 * <p>
 * Returns true if the host environment supports WebSocket connections.
 * When hasWebSocket() returns true, then Orbiter can safely use
 * the WebSocketConnection class to communicate with Union Server over a 
 * persistent TCP/IP socket. When hasWebSocket() returns false, Orbiter cannot use
 * WebSocketConnection, and must instead use HTTP communications (via either the
 * HTTPDirectConnection class or the HTTPIFrameConnection class). 
 * </p>
 * 
 * <p>
 * Note that Orbiter applications that use Orbiter's connect() or setServer()
 * methods to connect to Union Server do not need to perform a capabilities check
 * via hasWebSocket(). The connect() and setServer() methods check
 * the host environment's capabilities automatically, and choose the appropriate
 * connection type for the environment. The hasWebSocket() method is 
 * required in one situation only: when the application explicitly wishes to 
 * determine whether WebSocket is supported for the purpose of application flow
 * or user feedback.
 * </p>
 * 
 * @returns Boolean 
 * 
 * @see net.user1.orbiter.WebSocketConnection
 * @see net.user1.orbiter.Orbiter#connect
 **/
net.user1.orbiter.System.prototype.hasWebSocket = function() {
  return (typeof WebSocket !== "undefined" || typeof MozWebSocket !== "undefined");
}

net.user1.orbiter.System.prototype.toString = function () {
  return "[object System]";
}  
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.orbiter.VersionNumber = function (major, minor, revision, build) {
  this.major    = major;
  this.minor    = minor;
  this.revision = revision;
  this.build    = build == undefined ? -1 : build;
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================  
net.user1.orbiter.VersionNumber.prototype.fromVersionString = function (value) {
  var upcVersionParts = value.split(".");      
  major    = upcVersionParts[0];
  minor    = upcVersionParts[1];
  revision = upcVersionParts[2];
  build    = upcVersionParts.length == 4 ? upcVersionParts[4] : -1;
}

net.user1.orbiter.VersionNumber.prototype.toStringVerbose = function () {
  var versionString = this.major + "." + this.minor + "." + this.revision
            + ((this.build == -1) ? "" : " (Build " + this.build + ")");
  return versionString;
}
    
net.user1.orbiter.VersionNumber.prototype.toString = function () {
  var versionString = this.major + "." + this.minor + "." + this.revision
            + ((this.build == -1) ? "" : "." + this.build);
  return versionString;
}
//==============================================================================
// A COLLECTION OF NUMERIC FORMATTING FUNCTIONS
//==============================================================================
/** @class */
net.user1.utils.NumericFormatter = new Object();

net.user1.utils.NumericFormatter.dateToLocalHrMinSec = function (date) {
  var timeString = net.user1.utils.NumericFormatter.addLeadingZero(date.getHours()) + ":" 
                 + net.user1.utils.NumericFormatter.addLeadingZero(date.getMinutes()) + ":" 
                 + net.user1.utils.NumericFormatter.addLeadingZero(date.getSeconds());
  return timeString;
}
    
net.user1.utils.NumericFormatter.dateToLocalHrMinSecMs = function (date) {
  return net.user1.utils.NumericFormatter.dateToLocalHrMinSec(date) + "." + net.user1.utils.NumericFormatter.addTrailingZeros(date.getMilliseconds());
}
    
net.user1.utils.NumericFormatter.addLeadingZero = function (n) {
  return ((n>9)?"":"0")+n;
}
    
net.user1.utils.NumericFormatter.addTrailingZeros = function (n) {
  var ns = n.toString();
  
  if (ns.length == 1) {
    return ns + "00";
  } else if (ns.length == 2) {
    return ns + "0";
  } else {
    return ns;
  }
}
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.events.EventListener = function (listener,
                                           thisArg) {
  this.listener   = listener;
  this.thisArg    = thisArg;
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================
net.user1.events.EventListener.prototype.getListenerFunction = function () {
  return this.listener;
};
    
net.user1.events.EventListener.prototype.getThisArg = function () {
  return this.thisArg;
};

net.user1.events.EventListener.prototype.toString = function () {
  return "[object EventListener]";
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.events.EventDispatcher = function (target) {
  this.listeners = new Object();
  
  if (target !== undefined) {
    this.target = target;
  } else {
    this.target = this;
  }
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================
net.user1.events.EventDispatcher.prototype.addEventListener = function (type, 
                                                                        listener,
                                                                        thisArg) {
  if (this.listeners[type] === undefined) {
    this.listeners[type] = new Array();
  } 
  var listenerArray = this.listeners[type];
  
  if (this.hasListener(type, listener)) {
    return false;
  }
  
  var newListener = new net.user1.events.EventListener(listener,
                                                       thisArg);
  listenerArray.push(newListener);
  return true;      
}

net.user1.events.EventDispatcher.prototype.removeEventListener = function (type,
                                                                           listener) {
  var listenerArray = this.listeners[type];
  if (listenerArray === undefined) {
    return false;
  } 
  
  var foundListener;
  for (var i = 0; i < listenerArray.length; i++) {
    if (listenerArray[i].getListenerFunction() == listener) {
      foundListener = true;
      listenerArray.splice(i, 1);
      break;
    }
  }
  
  if (listenerArray.length == 0) {
    delete this.listeners[type];
  }
  
  return foundListener;      
}
    
net.user1.events.EventDispatcher.prototype.hasListener = function (type, 
                                                                   listener) {
  var listenerArray = this.listeners[type];
  if (listenerArray === undefined) {
    return false;
  } 
      
  for (var i = 0; i < listenerArray.length; i++) {
    if (listenerArray[i].getListenerFunction() == listener) {
      return true;
    }
  }
  return false;
}
    
net.user1.events.EventDispatcher.prototype.getListeners = function (type) {
  return this.listeners[type];
}

net.user1.events.EventDispatcher.prototype.dispatchEvent = function (event) {
  var listenerArray = this.listeners[event.type];
  if (listenerArray === undefined) {
    return;
  }
  if (event.type == undefined) {
    throw new Error("Event dispatch failed. No event name specified by " + event);
  }
  event.target = this.target;
  var numListeners = listenerArray.length;
  for (var i = 0; i < numListeners; i++) {
    listenerArray[i].getListenerFunction().apply(listenerArray[i].getThisArg(), [event]);
  }
}

//==============================================================================    
// TOSTRING
//==============================================================================

net.user1.events.EventDispatcher.prototype.toString = function () {
  return "[object EventDispatcher]";
}
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.events.Event = function (type) {
  if (type !== undefined) {
    this.type = type;
  } else {
    throw new Error("Event creation failed. No type specified. Event: " + this);
  }
  this.target = null;
};
    
net.user1.events.Event.prototype.toString = function () {
  return "[object Event]";
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class

The ConsoleLogger class outputs Orbiter's log to the host environment's console,
if a console is available.

*/
net.user1.logger.ConsoleLogger = function (log) {
  this.log = log;
  this.log.addEventListener(net.user1.logger.LogEvent.UPDATE, this.updateListener, this);
  // Print all messages already in the log
  var history = this.log.getHistory();
  for (var i = 0; i < history.length; i++) {
    this.out(history[i]);
  }
};
    
//==============================================================================
// INSTANCE METHODS
//==============================================================================
/** @private */ 
net.user1.logger.ConsoleLogger.prototype.updateListener = function (e) {
  var timeStamp = e.getTimeStamp();
  var level = e.getLevel();
  var bufferSpace = (level == net.user1.logger.Logger.INFO 
                     || level == net.user1.logger.Logger.WARN) ? " " : "";

  this.out(timeStamp + (timeStamp == "" ? "" : " ") 
           + e.getLevel() + ": " + bufferSpace + e.getMessage());
};

/** @private */ 
net.user1.logger.ConsoleLogger.prototype.out = function (value) {
  if (typeof console === "undefined" || typeof console.log === "undefined") {
    return;
  }
  console.log(value);
};

/** @private */ 
net.user1.logger.ConsoleLogger.prototype.dispose = function () {
  this.log.removeEventListener(net.user1.logger.LogEvent.UPDATE, this.updateListener);
  this.log = log = null;
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class
    @extends net.user1.events.Event
*/
net.user1.logger.LogEvent = function (type, message, level, timeStamp) {
  net.user1.events.Event.call(this, type);

  this.message = message;
  this.level = level;
  this.timeStamp = timeStamp;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.logger.LogEvent, net.user1.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
/** @constant */
net.user1.logger.LogEvent.UPDATE = "UPDATE";
/** @constant */
net.user1.logger.LogEvent.LEVEL_CHANGE = "LEVEL_CHANGE";
  
//==============================================================================
// INSTANCE METHODS
//==============================================================================
net.user1.logger.LogEvent.prototype.getMessage = function () {
  return this.message;
};
  
net.user1.logger.LogEvent.prototype.getLevel = function () {
  return this.level;
};
  
net.user1.logger.LogEvent.prototype.getTimeStamp = function () {
  return this.timeStamp;
};

net.user1.logger.LogEvent.prototype.toString = function () {
  return "[object LogEvent]";
};

//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class

The Logger class dispatches the following events:

<ul class="summary">
<li class="fixedFont">{@link net.user1.logger.LogEvent.LEVEL_CHANGE}</li>
<li class="fixedFont">{@link net.user1.logger.LogEvent.UPDATE}</li>
</ul>

To register for events, use {@link net.user1.events.EventDispatcher#addEventListener}.


    @extends net.user1.events.EventDispatcher
*/
net.user1.logger.Logger = function (historyLength) {
  // Invoke superclass constructor
  net.user1.events.EventDispatcher.call(this);
  
  // Instance variables
  this.suppressionTerms = new Array(); 
  this.timeStampEnabled = false;
  this.logLevel = 0;
  this.messages = new Array();
  this.historyLength = 0;

  // Initialization
  this.setHistoryLength(historyLength == null ? 100 : historyLength);
  this.enableTimeStamp(); 
  this.setLevel(net.user1.logger.Logger.INFO);
};  

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.logger.Logger, net.user1.events.EventDispatcher);
  
//==============================================================================
// STATIC VARIABLES
//==============================================================================
/** @constant */
net.user1.logger.Logger.FATAL = "FATAL"; 
/** @constant */
net.user1.logger.Logger.ERROR = "ERROR"; 
/** @constant */
net.user1.logger.Logger.WARN  = "WARN"; 
/** @constant */
net.user1.logger.Logger.INFO  = "INFO"; 
/** @constant */
net.user1.logger.Logger.DEBUG = "DEBUG";
net.user1.logger.Logger.logLevels = new Array(net.user1.logger.Logger.FATAL,
                                              net.user1.logger.Logger.ERROR, 
                                              net.user1.logger.Logger.WARN, 
                                              net.user1.logger.Logger.INFO, 
                                              net.user1.logger.Logger.DEBUG);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
net.user1.logger.Logger.prototype.setLevel = function (level) {
  if (level !== undefined) {
    for (var i = 0; i < net.user1.logger.Logger.logLevels.length; i++) {
      if (net.user1.logger.Logger.logLevels[i].toLowerCase() == level.toLowerCase()) {
        this.logLevel = i;
        this.dispatchEvent(new net.user1.logger.LogEvent(net.user1.logger.LogEvent.LEVEL_CHANGE, null, level));
        return;
      }
    }
  }

  this.warn("Invalid log level specified: " + level);
};

net.user1.logger.Logger.prototype.getLevel = function () {
  return net.user1.logger.Logger.logLevels[this.logLevel];
};

net.user1.logger.Logger.prototype.fatal = function (msg) {
  this.addEntry(0, net.user1.logger.Logger.FATAL, msg);
};

net.user1.logger.Logger.prototype.error = function (msg) {
  this.addEntry(1, net.user1.logger.Logger.ERROR, msg);
};

net.user1.logger.Logger.prototype.warn = function (msg) {
  this.addEntry(2, net.user1.logger.Logger.WARN, msg);
};

net.user1.logger.Logger.prototype.info = function (msg) {
  this.addEntry(3, net.user1.logger.Logger.INFO, msg);
};

net.user1.logger.Logger.prototype.debug = function (msg) {
  this.addEntry(4, net.user1.logger.Logger.DEBUG, msg);
};

net.user1.logger.Logger.prototype.addSuppressionTerm = function (term) {
  this.debug("Added suppression term. Log messages containing '" 
             + term + "' will now be ignored.");
  this.suppressionTerms.push(term);
};

net.user1.logger.Logger.prototype.removeSuppressionTerm = function (term) {
  var termIndex = net.user1.utils.ArrayUtil.indexOf(this.suppressionTerms, term);
  if (termIndex != -1) {
    this.suppressionTerms.splice(termIndex, 1);
    this.debug("Removed suppression term. Log messages containing '" 
               + term + "' will now be shown.");
    return true;
  }
  return false;
};

/** @private */
net.user1.logger.Logger.prototype.addEntry = function (level, levelName, msg) {
  var timeStamp = "";
  var time;
  
  // Abort if the log's level is lower than the message's level.
  if (this.logLevel < level) {
    return;
  }
  
  // Don't log messages if they contain any of the suppression terms.
  for (var i = this.suppressionTerms.length; --i >= 0;) {
    if (msg.indexOf(this.suppressionTerms[i]) != -1) {
      return;
    }
  }

  if (this.timeStampEnabled) {
    time = new Date();
    timeStamp = time.getMonth()+1 + "/" + String(time.getDate())
              + "/" + String(time.getFullYear()).substr(2)
              + " " + net.user1.utils.NumericFormatter.dateToLocalHrMinSecMs(time) 
              + " UTC" + (time.getTimezoneOffset() >= 0 ? "-" : "+") 
              + Math.abs(time.getTimezoneOffset() / 60);
  }
  
  // Log the message.
  this.addToHistory(levelName, msg, timeStamp);

  var e = new net.user1.logger.LogEvent(net.user1.logger.LogEvent.UPDATE,
                                        msg, levelName, timeStamp);
  this.dispatchEvent(e);
};

/** @private */ 
net.user1.logger.Logger.prototype.setHistoryLength = function (newHistoryLength) {
  this.historyLength = newHistoryLength;
  
  if (this.messages.length > this.historyLength) {
    this.messages.splice(this.historyLength);
  }
};

net.user1.logger.Logger.prototype.getHistoryLength = function () {
  return this.historyLength;
};

/** @private */ 
net.user1.logger.Logger.prototype.addToHistory = function (level, msg, timeStamp) {
  this.messages.push(timeStamp + (timeStamp == "" ? "" : " ") + level + ": " + msg);
  if (this.messages.length > this.historyLength) {
    this.messages.shift();
  }
};

net.user1.logger.Logger.prototype.getHistory = function () {
  return this.messages.slice(0);
};

net.user1.logger.Logger.prototype.enableTimeStamp = function () {
  this.timeStampEnabled = true;
};

net.user1.logger.Logger.prototype.disableTimeStamp = function () {
  this.timeStampEnabled = false;
};

net.user1.logger.Logger.prototype.toString = function () {
  return "[object Logger]";
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class
    @extends net.user1.events.Event
*/
net.user1.orbiter.ConnectionManagerEvent = function (type, connection, status) {
  net.user1.events.Event.call(this, type);
  
  this.connection = connection
  this.status = status;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.ConnectionManagerEvent, net.user1.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

/** @constant */
net.user1.orbiter.ConnectionManagerEvent.BEGIN_CONNECT = "BEGIN_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION = "SELECT_CONNECTION";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.READY = "READY";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.CONNECT_FAILURE = "CONNECT_FAILURE";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.CLIENT_KILL_CONNECT = "CLIENT_KILL_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.SERVER_KILL_CONNECT = "SERVER_KILL_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionManagerEvent.DISCONNECT = "DISCONNECT";
  
//==============================================================================
// INSTANCE METHODS
//==============================================================================

net.user1.orbiter.ConnectionManagerEvent.prototype.getConnection = function () {
  return this.connection;
}

net.user1.orbiter.ConnectionManagerEvent.prototype.getStatus = function () {
  return this.status;
}

net.user1.orbiter.ConnectionManagerEvent.prototype.toString = function () {
  return "[object ConnectionManagerEvent]";
}  

//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class

The Connection class dispatches the following events:

<ul class="summary">
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.BEGIN_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.CONNECT_FAILURE}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.DISCONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.SERVER_KILL_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.CLIENT_KILL_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionManagerEvent.READY}</li>
</ul>

To register for events, use {@link net.user1.events.EventDispatcher#addEventListener}.

    @extends net.user1.events.EventDispatcher
*/
net.user1.orbiter.ConnectionManager = function (orbiter) {
    // Call superconstructor
    net.user1.events.EventDispatcher.call(this);
    
    // Variables
    this.orbiter             = orbiter;
    this.connectAttemptCount = 0;
    this.connectAbortCount   = 0;
    this.readyCount          = 0;      
    this.connectFailedCount  = 0;
    this.connectionState     = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
    this.readyTimeout        = 0;
    this.connections         = new Array();
    this.activeConnection    = null;
    this.inProgressConnection = null;
    this.currentConnectionIndex = 0;
    this.attemptedConnections = null;
    this.setReadyTimeout(net.user1.orbiter.ConnectionManager.DEFAULT_READY_TIMEOUT);
};
    
//==============================================================================    
// INHERITANCE
//============================================================================== 
net.user1.utils.extend(net.user1.orbiter.ConnectionManager, net.user1.events.EventDispatcher);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
net.user1.orbiter.ConnectionManager.DEFAULT_READY_TIMEOUT = 10000;

// =============================================================================
// CONNECT AND DISCONNECT
// =============================================================================
net.user1.orbiter.ConnectionManager.prototype.connect = function () {
  if (this.connections.length == 0) {
    this.orbiter.getLog().error("[CONNECTION_MANAGER] No connections defined. Connection request ignored.");
    return;
  }
  
  this.connectAttemptCount++;
  this.attemptedConnections = new Array();

  switch (this.connectionState) {
    case net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS:
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Connection attempt already in " 
                            + "progress. Existing attempt must be aborted before"  
                            + " new connection attempt begins...");
      this.disconnect();
      break;

    case net.user1.orbiter.ConnectionState.READY:
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Existing connection to Union" 
                            + " must be disconnected before new connection" 
                            + " attempt begins.");
      this.disconnect();
      break;
  }
  this.connectionState = net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS;
  
  this.orbiter.getLog().debug("[CONNECTION_MANAGER] Searching for most recent valid connection.");
  var originalConnectionIndex = this.currentConnectionIndex;
  while (!this.getCurrentConnection().isValid()) {
    this.advance();
    if (this.currentConnectionIndex == originalConnectionIndex) {
      // Couldn't find a valid connection, so start the connection with
      // the first connection in the connection list
      this.orbiter.getLog().debug("[CONNECTION_MANAGER] No valid connection found. Starting connection attempt with first connection.");
      this.currentConnectionIndex = 0;
      break;
    }
  }  
  
  this.dispatchBeginConnect();
  this.connectCurrentConnection();
};

net.user1.orbiter.ConnectionManager.prototype.disconnect = function () {
  if (this.connections.length == 0) {
    this.dispatchConnectFailure("No connections defined. Disconnection attempt failed.");
    return;
  }
  
  switch (this.connectionState) {
    // Currently connected
    case net.user1.orbiter.ConnectionState.READY:
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Closing existing connection: "
                            + this.getActiveConnection().toString());
      this.connectionState = net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS;
      this.disconnectConnection(this.getActiveConnection());
      break;

    // Currently attempting to connect
    case net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS:
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Aborting existing connection attempt: "
                            + this.getInProgressConnection().toString());
      this.connectAbortCount++;
      this.connectionState = net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS;
      this.disconnectConnection(this.getInProgressConnection());
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Connection abort complete.");
      break;

    // Currently attempting to disconnect
    case net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS:
      this.orbiter.getLog().info("[CONNECTION_MANAGER] Disconnection request ignored."
                            + " Already disconnecting.");
      break;
  }
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.disconnectConnection = function (connection) {
  connection.disconnect();
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.connectCurrentConnection = function () {
  // If there are no Connections defined, fail immediately 
  if (this.connections.length == 0) {
    this.connectionState = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
    this.connectFailedCount++;
    this.dispatchConnectFailure("No connections defined. Connection attempt failed.");
    return;
  }
  
  this.inProgressConnection = this.getCurrentConnection();
  
  // If the requested connection has already been attempted this round,
  // ignore it.
  if (net.user1.utils.ArrayUtil.indexOf(this.attemptedConnections, this.inProgressConnection) != -1) {
    this.advanceAndConnect();
    return;
  }
  
  this.dispatchSelectConnection(this.inProgressConnection);
  this.orbiter.getLog().info("[CONNECTION_MANAGER] Attempting connection via "
                        + this.inProgressConnection.toString() + ". (Connection "
                        + (this.attemptedConnections.length+1) + " of "
                        + this.connections.length + ". Attempt " + this.connectAttemptCount +" since last successful connection).");
  this.addConnectionListeners(this.inProgressConnection);
  this.inProgressConnection.connect();
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.advanceAndConnect = function () {
  if (!this.connectAttemptComplete()) {
    this.advance();
    this.connectCurrentConnection();
  } else {
    // Tried all connections, so give up and dispatch CONNECT_FAILURE
    this.connectFailedCount++;
    this.connectionState = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
    this.orbiter.getLog().info("[CONNECTION_MANAGER] Connection failed for all specified hosts and ports.");
    this.dispatchConnectFailure("Connection failed for all specified hosts and ports.");
  }
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.connectAttemptComplete = function () {
  return this.attemptedConnections.length == this.connections.length;
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.advance = function () {
  this.currentConnectionIndex++;
  if (this.currentConnectionIndex == this.connections.length) {
    this.currentConnectionIndex = 0;
  }
};
    
// =============================================================================
// CONNECTION OBJECT MANAGEMENT
// =============================================================================
net.user1.orbiter.ConnectionManager.prototype.addConnection = function (connection) {
  if (connection != null) {
    this.orbiter.getLog().info("[CONNECTION_MANAGER] New connection added. "
                          + connection.toString() + ".");
    connection.setOrbiter(this.orbiter);
    this.connections.push(connection);
  }
};
    
net.user1.orbiter.ConnectionManager.prototype.removeConnection = function (connection) {
  if (connection != null) {
    connection.disconnect();
    this.removeConnectionListeners(connection);
    return net.user1.utils.ArrayUtil.remove(this.connections, connection);
  } else {
    return false;
  }
};

net.user1.orbiter.ConnectionManager.prototype.removeAllConnections = function () {
  if (this.connections.length == 0) {
    this.orbiter.getLog().info("[CONNECTION_MANAGER] removeAllConnections() ignored. " +
                               " No connections to remove.");
    return;
  }
  
  this.orbiter.getLog().info("[CONNECTION_MANAGER] Removing all connections...");
  this.disconnect();
  while (this.connections.length > 0) {
    this.removeConnection(this.connections[0]);
  }
  this.currentConnectionIndex = 0;
  this.orbiter.getLog().info("[CONNECTION_MANAGER] All connections removed.");
};
    
// =============================================================================
// CONNECTION ACCESS
// =============================================================================
net.user1.orbiter.ConnectionManager.prototype.getActiveConnection = function () {
  return this.activeConnection;
};
    
net.user1.orbiter.ConnectionManager.prototype.getInProgressConnection = function () {
  return this.inProgressConnection;
};
    
net.user1.orbiter.ConnectionManager.prototype.getConnections = function () {
  return this.connections.slice();
};

/** @private */    
net.user1.orbiter.ConnectionManager.prototype.getCurrentConnection = function () {
  return this.connections[this.currentConnectionIndex];
};
    
// =============================================================================
// CONNECTION LISTENER REGISTRATION
// =============================================================================
/** @private */
net.user1.orbiter.ConnectionManager.prototype.addConnectionListeners = function(connection) {
  if (connection != null) {
    connection.addEventListener(net.user1.orbiter.ConnectionEvent.READY,               this.readyListener, this);
    connection.addEventListener(net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE,     this.connectFailureListener, this);
    connection.addEventListener(net.user1.orbiter.ConnectionEvent.DISCONNECT,          this.disconnectListener, this);
    connection.addEventListener(net.user1.orbiter.ConnectionEvent.CLIENT_KILL_CONNECT, this.clientKillConnectListener, this);
    connection.addEventListener(net.user1.orbiter.ConnectionEvent.SERVER_KILL_CONNECT, this.serverKillConnectListener, this);
  }
};
    
/** @private */    
net.user1.orbiter.ConnectionManager.prototype.removeConnectionListeners = function (connection) {
  if (connection != null) {
    connection.removeEventListener(net.user1.orbiter.ConnectionEvent.READY,               this.readyListener);
    connection.removeEventListener(net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE,     this.connectFailureListener);
    connection.removeEventListener(net.user1.orbiter.ConnectionEvent.DISCONNECT,          this.disconnectListener);
    connection.removeEventListener(net.user1.orbiter.ConnectionEvent.CLIENT_KILL_CONNECT, this.clientKillConnectListener);
    connection.removeEventListener(net.user1.orbiter.ConnectionEvent.SERVER_KILL_CONNECT, this.serverKillConnectListener);
  }
};
    
// =============================================================================
// CONNECTION STATE ACCESS
// =============================================================================
net.user1.orbiter.ConnectionManager.prototype.isReady = function () {
  return this.connectionState == net.user1.orbiter.ConnectionState.READY;
}
    
net.user1.orbiter.ConnectionManager.prototype.getConnectionState = function () {
  return this.connectionState;
};
    
// =============================================================================
// CONNECTION COUNT MANAGEMENT
// =============================================================================
net.user1.orbiter.ConnectionManager.prototype.getReadyCount = function () {
  return this.readyCount;
};
  
net.user1.orbiter.ConnectionManager.prototype.getConnectFailedCount = function () {
  return this.connectFailedCount;
};
  
net.user1.orbiter.ConnectionManager.prototype.getConnectAttemptCount = function () {
  return this.connectAttemptCount;
};
  
net.user1.orbiter.ConnectionManager.prototype.getConnectAbortCount = function () {
  return this.connectAbortCount;
};
    
// =============================================================================
// CURRENT CONNECTION LISTENERS
// =============================================================================
/** @private */
net.user1.orbiter.ConnectionManager.prototype.readyListener = function (e) {
  this.connectionState = net.user1.orbiter.ConnectionState.READY;
  this.inProgressConnection = null;
  this.activeConnection = e.target;
  this.readyCount++;
  this.connectFailedCount = 0;
  this.connectAttemptCount = 0;
  this.connectAbortCount = 0;
  this.dispatchReady();
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.connectFailureListener = function (e) {
  this.orbiter.getLog().warn("[CONNECTION_MANAGER] Connection failed for "
                        + e.target.toString() 
                        + ". Status: [" + e.getStatus() + "]");
  
  this.removeConnectionListeners(e.target);
  this.inProgressConnection = null;
  
  if (this.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
    this.dispatchConnectFailure("Connection closed by client.");
  } else {
    this.attemptedConnections.push(e.target);
    this.advanceAndConnect();
  }
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.disconnectListener = function (e) {
  this.connectionState = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
  this.removeConnectionListeners(e.target);
  this.activeConnection = null;
  this.dispatchDisconnect(e.target);
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.clientKillConnectListener = function (e) {
  this.dispatchClientKillConnect(e.target);
  // This event is always followed by a DISCONNECT event
};

/** @private */
net.user1.orbiter.ConnectionManager.prototype.serverKillConnectListener = function (e) {
  this.dispatchServerKillConnect(e.target);
  // This event is always followed by a DISCONNECT event
};

// =============================================================================
// READY TIMEOUT MANAGEMENT
// =============================================================================
    
net.user1.orbiter.ConnectionManager.prototype.setReadyTimeout = function (milliseconds) {
  if (milliseconds > 0) {
    this.readyTimeout = milliseconds;
    this.orbiter.getLog().info("[CONNECTION_MANAGER] Ready timeout set to " + milliseconds + " ms.");
    if (milliseconds < 3000) {
      this.orbiter.getLog().warn("[CONNECTION_MANAGER] Current ready timeout (" 
                           + milliseconds + ") may not allow sufficient time"
                           + " to connect to Union Server over a typical"
                           + " internet connection.");
    }
  } else {
    this.orbiter.getLog().warn("[CONNECTION_MANAGER] Invalid ready timeout specified: " 
             + milliseconds + ". Duration must be greater than zero.");
  }
};
    
net.user1.orbiter.ConnectionManager.prototype.getReadyTimeout = function () {
  return this.readyTimeout;
};
    
// =============================================================================
// EVENT DISPATCHING
// =============================================================================
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchBeginConnect = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.BEGIN_CONNECT));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchSelectConnection = function (connection) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION,
      connection));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchConnectFailure = function (status) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.CONNECT_FAILURE,
      null, status));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchDisconnect = function (connection) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.DISCONNECT,
      connection));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchServerKillConnect = function (connection) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.SERVER_KILL_CONNECT,
      connection));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchClientKillConnect = function (connection) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.CLIENT_KILL_CONNECT,
      connection));
};
    
/** @private */
net.user1.orbiter.ConnectionManager.prototype.dispatchReady = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionManagerEvent(net.user1.orbiter.ConnectionManagerEvent.READY));
};
    
// =============================================================================
// DISPOSAL
// =============================================================================    
net.user1.orbiter.ConnectionManager.prototype.dispose = function () {
  this.removeAllConnections();
  this.attemptedConnections = null;
  this.activeConnection = null;
  this.inProgressConnection = null;
  this.connections = null;
};






















//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.orbiter.ConnectionMonitor = function (orbiter) {
  // Instance variables
  this.connectionTimeout = 0;
  this.heartbeatIntervalID = -1;
  this.heartbeatCounter = 0;
  this.heartbeatEnabled = true;
  this.heartbeats = new net.user1.utils.UDictionary();
  
  this.oldestHeartbeat = 0;
  this.heartBeatFrequency = -1;
  
  this.sharedPing = false;
  
  this.autoReconnectFrequency = -1;
  this.autoReconnectTimeoutID = -1;
  this.autoReconnectAttemptLimit = -1;
  
  this.orbiter = orbiter;
  this.msgManager = orbiter.getMessageManager();
  this.log = orbiter.getLog();
  
  // Initialization
  this.orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.READY, this.connectReadyListener, this);
  this.orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.CLOSE, this.connectCloseListener, this);
  this.disableHeartbeatLogging();
};

//==============================================================================
// STATIC VARIABLES
//==============================================================================
net.user1.orbiter.ConnectionMonitor.DEFAULT_HEARTBEAT_FREQUENCY = 10000;
net.user1.orbiter.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY = 20;
net.user1.orbiter.ConnectionMonitor.DEFAULT_AUTORECONNECT_FREQUENCY = -1;
net.user1.orbiter.ConnectionMonitor.DEFAULT_AUTORECONNECT_ATTEMPT_LIMIT = -1;
net.user1.orbiter.ConnectionMonitor.DEFAULT_CONNECTION_TIMEOUT = 60000;

//==============================================================================
// CONNECTION MONITORING
//==============================================================================
/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.connectReadyListener = function (e) {
  this.msgManager.addMessageListener(net.user1.orbiter.Messages.CLIENT_HEARTBEAT, this.heartbeatMessageListener, this);
  this.startHeartbeat();
  this.stopReconnect();
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.connectCloseListener = function (e) {
  this.stopHeartbeat();
  if (this.autoReconnectFrequency > -1) {
    if (this.autoReconnectTimeoutID != -1) {
      return;
    } else {
      var self = this;
      setTimeout(function () {
        // Defer reconnection until after all other listeners have processed the
        // CLOSE event
        self.log.warn("[CONNECTION_MONITOR] Disconnection detected."); 
        self.doReconnect();
      }, 1);
    }
  }
}
    
//==============================================================================
// HEARTBEAT
//==============================================================================

net.user1.orbiter.ConnectionMonitor.prototype.enableHeartbeat = function () {
  this.log.info("[CONNECTION_MONITOR] Heartbeat enabled.");
  this.heartbeatEnabled = true;
  this.startHeartbeat();
}

net.user1.orbiter.ConnectionMonitor.prototype.disableHeartbeat = function () {
  this.log.info("[CONNECTION_MONITOR] Heartbeat disabled.");
  this.heartbeatEnabled = false;
  this.stopHeartbeat();
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.startHeartbeat = function () {
  if (!this.heartbeatEnabled) {
    this.log.info("[CONNECTION_MONITOR] Heartbeat is currently disabled. Ignoring start request.");
    return;
  }
  
  this.stopHeartbeat();
  
  this.heartbeats = new net.user1.utils.UDictionary();
  
  var currentObj = this;
  var callback   = this.heartbeatTimerListener;
  this.heartbeatIntervalID = setInterval(function () {
    callback.call(currentObj);
  }, this.heartBeatFrequency);
  
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.stopHeartbeat = function () {
  clearInterval(this.heartbeatIntervalID);
  this.heartbeats = null;
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.heartbeatTimerListener = function () {
  if (!this.orbiter.isReady()) {
    this.log.info("[CONNECTION_MONITOR] Orbiter is not connected. Stopping heartbeat.");
    this.stopHeartbeat();
    return;
  }

  var timeSinceOldestHeartbeat;
  var now = new Date().getTime();
  
  this.heartbeats[this.heartbeatCounter] = now;
  this.orbiter.getMessageManager().sendUPC("u2",
                                 net.user1.orbiter.Messages.CLIENT_HEARTBEAT, 
                                 this.orbiter.getClientID(),
                                 "",
                                 this.heartbeatCounter);
  this.heartbeatCounter++;
  
  // Assign the oldest heartbeat
  if (this.heartbeats.length == 1) {
    this.oldestHeartbeat = now;
  } else { 
    this.oldestHeartbeat = Number.MAX_VALUE;
    for (var p in this.heartbeats) {
      if (this.heartbeats[p] < this.oldestHeartbeat) {
        this.oldestHeartbeat = this.heartbeats[p];
      }
    }
  }
  // Close connection if too much time has passed since the last response
  timeSinceOldestHeartbeat = now - this.oldestHeartbeat;
  if (timeSinceOldestHeartbeat > this.connectionTimeout) {
    this.log.warn("[CONNECTION_MONITOR] No response from server in " + 
                  timeSinceOldestHeartbeat + "ms. Starting automatic disconnect.");
    this.orbiter.disconnect();
  }
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.heartbeatMessageListener = function (fromClientID, id) {
  var ping = new Date().getTime() - this.heartbeats[parseInt(id)];
  this.orbiter.self().ping = ping;
  this.orbiter.getMessageManager().sendUPC("u3",
                                           this.orbiter.getClientID(),
                                           "",
                                           "_PING",
                                           ping.toString(),
                                           "",
                                           "0",
                                           this.sharedPing);
  delete this.heartbeats[parseInt(id)];
}

//==============================================================================
// RECONNECTION
//==============================================================================
/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.reconnectTimerListener = function (e) {
  this.stopReconnect();
  if (this.orbiter.getConnectionManager().connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED) {
    this.doReconnect();
  }
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.stopReconnect = function () {
  clearTimeout(this.autoReconnectTimeoutID);
  this.autoReconnectTimeoutID = -1
}

/** @private */
net.user1.orbiter.ConnectionMonitor.prototype.doReconnect = function () {
  // Check if the reconnection attempt limit has been hit
  var numAttempts = this.orbiter.getConnectionManager().getConnectAttemptCount();
  if (this.autoReconnectAttemptLimit != -1
      && numAttempts > 0 
      && numAttempts % (this.autoReconnectAttemptLimit+1) == 0) {
    this.log.warn("[CONNECTION_MONITOR] Automatic reconnect attempt limit reached." 
                  + " No further automatic connection attempts will be made until"
                  + " the next manual connection attempt.");
    return;
  }
            
  // Reset the timer
  this.stopReconnect();

  this.log.warn("[CONNECTION_MONITOR] Attempting automatic reconnect. (Next attempt in "
           + this.autoReconnectFrequency + "ms.)");      
   
  // Schedule the next reconnection attempt
  var currentObj = this;
  var callback   = this.reconnectTimerListener;
  this.autoReconnectTimeoutID = setTimeout(function () {
    currentObj.autoReconnectTimeoutID = -1;
    callback.call(currentObj);
  }, this.autoReconnectFrequency);
  
  // Attempt to connect
  this.orbiter.connect();
}

//==============================================================================
// CONFIGURATION
//==============================================================================

net.user1.orbiter.ConnectionMonitor.prototype.restoreDefaults = function () {
  this.setAutoReconnectFrequency(net.user1.orbiter.ConnectionMonitor.DEFAULT_AUTORECONNECT_FREQUENCY);
  this.setAutoReconnectAttemptLimit(net.user1.orbiter.ConnectionMonitor.DEFAULT_AUTORECONNECT_ATTEMPT_LIMIT);
  this.setConnectionTimeout(net.user1.orbiter.ConnectionMonitor.DEFAULT_CONNECTION_TIMEOUT);
  this.setHeartbeatFrequency(net.user1.orbiter.ConnectionMonitor.DEFAULT_HEARTBEAT_FREQUENCY);
}

net.user1.orbiter.ConnectionMonitor.prototype.setHeartbeatFrequency = function (milliseconds) {
  if (milliseconds >= net.user1.orbiter.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY) {
    this.heartBeatFrequency = milliseconds;
    this.log.info("[CONNECTION_MONITOR] Heartbeat frequency set to " 
                  + milliseconds + " ms.");
    // Log a warning for low heartbeat frequencies...
    if (milliseconds >= net.user1.orbiter.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY && milliseconds < 1000) {
      this.log.info("[CONNECTION_MONITOR] HEARTBEAT FREQUENCY WARNING: " 
               + milliseconds + " ms. Current frequency will generate "
               + (Math.floor((1000/milliseconds)*10)/10) 
               + " messages per second per connected client.");
    }
    
    // If the connection is ready, then restart
    // the heartbeat when the heartbeat frequency changes.
    if (this.orbiter.isReady()) {
      this.startHeartbeat();
    }
  } else {
    this.log.warn("[CONNECTION_MONITOR] Invalid heartbeat frequency specified: " 
             + milliseconds + ". Frequency must be "
             + net.user1.orbiter.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY + " or greater.");
  }
}

net.user1.orbiter.ConnectionMonitor.prototype.getHeartbeatFrequency = function () {
  return this.heartBeatFrequency;
}

net.user1.orbiter.ConnectionMonitor.prototype.setAutoReconnectFrequency = function (milliseconds) {
  if (milliseconds == -1) {
    this.autoReconnectFrequency = milliseconds;
    this.stopReconnect();
  } else if (milliseconds > -1) {
    this.autoReconnectFrequency = milliseconds;
    this.log.info("[CONNECTION_MONITOR] Auto-reconnect frequency set to " 
                  + milliseconds + " ms.");
    if (milliseconds < 1000) {
      this.log.info("[CONNECTION_MONITOR] RECONNECT FREQUENCY WARNING: " 
               + milliseconds + " ms. Current frequency will cause "
               + (milliseconds == 0 ? "1000" : (Math.floor((1000/milliseconds)*10)/10)) 
               + " reconnection attempts per second.");
    }
  } else {
    this.log.warn("[CONNECTION_MONITOR] Invalid reconnect frequency specified: " + milliseconds
                             + ". Frequency must -1 or greater.");
  }
}

net.user1.orbiter.ConnectionMonitor.prototype.getAutoReconnectFrequency = function () {
  return this.autoReconnectFrequency;
}

net.user1.orbiter.ConnectionMonitor.prototype.setAutoReconnectAttemptLimit = function (attempts) {
  if (attempts < -1 || attempts == 0) {
    this.log.warn("[CONNECTION_MONITOR] Invalid Auto-reconnect attempt limit specified: " 
             + attempts + ". Limit must -1 or greater than 1.");
    return;
  }
    
  this.autoReconnectAttemptLimit = attempts;
  
  if (attempts == -1) {
    this.log.info("[CONNECTION_MONITOR] Auto-reconnect attempt limit set to none."); 
  } else {
    this.log.info("[CONNECTION_MONITOR] Auto-reconnect attempt limit set to " 
                  + attempts + " attempt(s).");
  }
};
    
net.user1.orbiter.ConnectionMonitor.prototype.getAutoReconnectAttemptLimit = function () {
  return this.autoReconnectAttemptLimit;
}

net.user1.orbiter.ConnectionMonitor.prototype.setConnectionTimeout = function (milliseconds) {
  if (milliseconds > 0) {
    this.connectionTimeout = milliseconds;
    this.log.info("[CONNECTION_MONITOR] Connection timeout set to " 
                  + milliseconds + " ms.");
  } else {
    this.log.warn("[CONNECTION_MONITOR] Invalid connection timeout specified: " 
                             + milliseconds + ". Frequency must be greater " 
                             + "than zero.");
  }
}

net.user1.orbiter.ConnectionMonitor.prototype.getConnectionTimeout = function () {
  return this.connectionTimeout;
}

net.user1.orbiter.ConnectionMonitor.prototype.sharePing = function (share) {
  this.sharedPing = share;
}

net.user1.orbiter.ConnectionMonitor.prototype.isPingShared = function () {
  return this.sharedPing;
}

net.user1.orbiter.ConnectionMonitor.prototype.disableHeartbeatLogging = function () {
  this.log.addSuppressionTerm("<A>CLIENT_HEARTBEAT</A>");
  this.log.addSuppressionTerm("<A>_PING</A>");
  this.log.addSuppressionTerm("[_PING]");
  this.log.addSuppressionTerm("<![CDATA[_PING]]>");
}

net.user1.orbiter.ConnectionMonitor.prototype.enableHeartbeatLogging = function () {
  this.log.removeSuppressionTerm("<A>CLIENT_HEARTBEAT</A>");
  this.log.removeSuppressionTerm("<A>_PING</A>");
  this.log.removeSuppressionTerm("[_PING]");
  this.log.removeSuppressionTerm("<![CDATA[_PING]]>");
}

// =============================================================================
// DISPOSAL
// =============================================================================

net.user1.orbiter.ConnectionMonitor.prototype.dispose = function () {
  this.stopHeartbeat();
  this.stopReconnect();

  this.heartbeats = null;
  
  this.orbiter.removeEventListener(net.user1.orbiter.OrbiterEvent.READY, this.connectReadyListener);
  this.orbiter.removeEventListener(net.user1.orbiter.OrbiterEvent.CLOSE, this.connectCloseListener);
  this.orbiter = null;
  this.msgManager.removeMessageListener("u7", this.u7);
  this.msgManager(null);
  this.log = null;
};

















//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class
    @private */
net.user1.orbiter.CoreMessageListener = function (orbiter) {
  this.orbiter = orbiter;
  this.log = orbiter.getLog();      
  this.registerCoreListeners();
  this.orbiter.getConnectionManager().addEventListener(net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION, 
                                                       this.selectConnectionListener, this);
};

net.user1.orbiter.CoreMessageListener.prototype.registerCoreListeners = function () {
  var msgMan = this.orbiter.getMessageManager();
  msgMan.addMessageListener(net.user1.orbiter.UPC.RECEIVE_MESSAGE, this.u7, this);
};

net.user1.orbiter.CoreMessageListener.prototype.selectConnectionListener = function (e) {
  var msgMan = this.orbiter.getMessageManager();
  if (msgMan.removeListenersOnDisconnect) {
    this.registerCoreListeners();
  }
};

net.user1.orbiter.CoreMessageListener.prototype.u7 = function (message,
                                                               broadcastType,
                                                               fromClientID,
                                                               toRoomID) {
  var msgMan = this.orbiter.getMessageManager();
  var args;
  var userDefinedArgs = Array.prototype.slice.call(arguments).slice(4);

  // ===== To Clients, or To Server =====
  if (broadcastType != net.user1.orbiter.ReceiveMessageBroadcastType.TO_ROOMS) {
    args = [fromClientID].concat(userDefinedArgs);
    msgMan.notifyMessageListeners(message, args);
    return;
  }
  
  // ===== To Rooms =====
  var listeners = msgMan.getMessageListeners(message);

  // Split the recipient room ID into two parts
  var toRoomSimpleID  = net.user1.orbiter.RoomIDParser.getSimpleRoomID(toRoomID);
  var toRoomQualifier = net.user1.orbiter.RoomIDParser.getQualifier(toRoomID);
  var listenerFound; 
  var listenerIgnoredMessage;
  var messageListener;
                                       
  // ===== Run once for each message listener =====
  for (var i = 0; i < listeners.length; i++) {
    messageListener = listeners[i];
    listenerIgnoredMessage = true;
    
    // --- Has no "forRoomIDs" filter ---
    if (messageListener.getForRoomIDs() == null) {
      args = [fromClientID, toRoomID].concat(userDefinedArgs);
      messageListener.getListenerFunction().apply(messageListener.getThisArg(), args);
      listenerFound = true;
      listenerIgnoredMessage = false;
      continue;  // Done with this listener. On to the next.
    }
    
    // --- Has a "forRoomIDs" filter ---
    var listenerRoomIDs = messageListener.getForRoomIDs();
    var listenerRoomQualifier;
    var listenerRoomSimpleID;
    var listenerRoomIDString;
    // ===== Run once for each room id =====
    for (var i = 0; i < listenerRoomIDs.length; i++) {
      listenerRoomIDString = listenerRoomIDs[i];
      listenerRoomQualifier = net.user1.orbiter.RoomIDParser.getQualifier(listenerRoomIDString);
      listenerRoomSimpleID  = net.user1.orbiter.RoomIDParser.getSimpleRoomID(listenerRoomIDString);

      // Check if the listener is interested in the recipient room...
      if (listenerRoomQualifier == toRoomQualifier
          && 
          (listenerRoomSimpleID == toRoomSimpleID
           || listenerRoomSimpleID == "*")) {
        // Found a match. Notify the listener...
          
        // Prepare args.
        if (listenerRoomIDs.length == 1) {
          // The listener is interested in messages sent to a 
          // specific room only, so omit the "toRoom" arg.
          args = [fromClientID].concat(userDefinedArgs);
        } else {
          // The listener is interested in messages sent to 
          // multiple rooms, so include the "toRoomID" arg so the listener 
          // knows which room received the message.
          args = [fromClientID, toRoomID].concat(userDefinedArgs);
        }
        
        messageListener.getListenerFunction().apply(messageListener.getThisArg(), args);
        listenerFound = true;
        listenerIgnoredMessage = false;
        break; // Stop looking at this listener's room ids
      }
    } // Done looking at this listener's room ids
    if (listenerIgnoredMessage) {
      this.log.debug("Message listener ignored message: " + message + ". "
                     + "Listener registered to receive " 
                     + "messages sent to: " + messageListener.getForRoomIDs() 
                     + ", but message was sent to: " + toRoomID);
    }
  } // Done looking at listeners for the incoming message
  if (!listenerFound) {
    this.log.warn("No message listener handled incoming message: " 
                  + message + ", sent to: " + toRoomID);
  }
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class
    @extends net.user1.events.Event
*/
net.user1.orbiter.OrbiterEvent = function (type, 
                                           serverUPCVersion) {
  net.user1.events.Event.call(this, type);

  this.serverUPCVersion = serverUPCVersion;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.OrbiterEvent, net.user1.events.Event);
 
//==============================================================================
// STATIC VARIABLES
//==============================================================================
/** @constant */
net.user1.orbiter.OrbiterEvent.READY = "READY";
/** @constant */
net.user1.orbiter.OrbiterEvent.CLOSE = "CLOSE";
/** @constant */
net.user1.orbiter.OrbiterEvent.PROTOCOL_INCOMPATIBLE = "PROTOCOL_INCOMPATIBLE";

//==============================================================================
// INSTANCE METHODS
//==============================================================================  
net.user1.orbiter.OrbiterEvent.prototype.getServerUPCVersion = function () {
  return this.serverUPCVersion;
}

net.user1.orbiter.OrbiterEvent.prototype.toString = function () {
  return "[object OrbiterEvent]";
}  

//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class

The Orbiter class dispatches the following events:

<ul class="summary">
<li class="fixedFont">{@link net.user1.orbiter.OrbiterEvent.READY}</li>
<li class="fixedFont">{@link net.user1.orbiter.OrbiterEvent.CLOSE}</li>
<li class="fixedFont">{@link net.user1.orbiter.OrbiterEvent.PROTOCOL_INCOMPATIBLE}</li>
</ul>

To register for events, use {@link net.user1.events.EventDispatcher#addEventListener}.

    @extends net.user1.events.EventDispatcher
*/
net.user1.orbiter.Orbiter = function () {
  // Invoke superclass constructor
  net.user1.events.EventDispatcher.call(this);
  
  // Initialization. For non-browser environments, set window to null.
  this.window = typeof window == "undefined" ? null : window;
  
  // Initialize system versions.
  this.system = new net.user1.orbiter.System(this.window);
  this.log = new net.user1.logger.Logger();
  
  // Output host version information.
  if (typeof navigator != "undefined") {
    this.log.info("User Agent: " + navigator.userAgent + " " + navigator.platform);
  }
  this.log.info("Union Client Version: " + this.system.getClientType() + " " + this.system.getClientVersion().toStringVerbose());
  this.log.info("Client UPC Protocol Version: " + this.system.getUPCVersion().toString());
  this.consoleLogger = null;
  
  if (!this.system.isJavaScriptCompatible()) {
    // Missing required JavaScript capabilities, so abort. 
    this.log.fatal("[ORBITERMICRO] JavaScript version incompatibility detected." 
                   + " Quitting.");
    return;
  }
  
  // Set up the connection manager.
  this.connectionMan = new net.user1.orbiter.ConnectionManager(this);
  
  // Set up the message manager.
  this.messageManager = new net.user1.orbiter.MessageManager(this.log, this.connectionMan);
  
  
  // Set up the core message listener
  this.coreMsgListener = new net.user1.orbiter.CoreMessageListener(this);
  
  // Register for ConnectionManager events.
  this.connectionMan.addEventListener(net.user1.orbiter.ConnectionManagerEvent.READY, 
                                      this._readyListener, this);
  this.connectionMan.addEventListener(net.user1.orbiter.ConnectionManagerEvent.CONNECT_FAILURE, 
                                      this._connectFailureListener, this);
  this.connectionMan.addEventListener(net.user1.orbiter.ConnectionManagerEvent.DISCONNECT, 
                                      this._disconnectListener, this);
  
  // Set up the connection monitor
  this.connectionMonitor = new net.user1.orbiter.ConnectionMonitor(this);
  this.connectionMonitor.restoreDefaults();
  
  this.clientID = "";
  this.sessionID = "";
  
  // Self-client shim
  this.selfClient = {};
  this.selfClient.ping = -1;
  this.selfClient.getPing = function () {
    return this.ping;
  };
  
  // Register to be notified when a new connection is about to be opened
  this.connectionMan.addEventListener(net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION, 
                                      this._selectConnectionListener, this);

  // Enable HTTP failover connections
  this.httpFailoverEnabled = true;
  
  this.log.info("[ORBITERMICRO] Initialization complete.");
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.Orbiter, net.user1.events.EventDispatcher);

//==============================================================================    
// STATIC VARIABLES
//==============================================================================    
net.user1.orbiter.Orbiter.DEFAULT_READY_TIMEOUT = 10000;

//==============================================================================    
// CLIENT INFO
//==============================================================================    
net.user1.orbiter.Orbiter.prototype.getClientID = function () {
  return this.clientID;
};

net.user1.orbiter.Orbiter.prototype.self = function () {
  return this.selfClient;
}

//==============================================================================    
// SESSION ID
//==============================================================================     
/** @private */
net.user1.orbiter.Orbiter.prototype.setSessionID = function (id) {
  this.sessionID = id;
};

net.user1.orbiter.Orbiter.prototype.getSessionID = function () {
  return this.sessionID == null ? "" : this.sessionID;
};

//==============================================================================    
// UPC LISTENERS
//==============================================================================    
/** @private */
net.user1.orbiter.Orbiter.prototype.u29 = function (clientID) {
  this.clientID = clientID;
};

/** @private */
net.user1.orbiter.Orbiter.prototype.u66 = function (clientID,
                                                    sessionID,
                                                    serverUPCVersionString,
                                                    protocolCompatible) {
  var serverUPCVersion = new net.user1.orbiter.VersionNumber();
  serverUPCVersion.fromVersionString(serverUPCVersionString);
  if (protocolCompatible == "false") {
    this.dispatchProtocolIncompatible(serverUPCVersion);
  }
};

//==============================================================================    
// CONNECTION
//==============================================================================
/** @private */   
net.user1.orbiter.Orbiter.prototype.buildConnection = function (host, port, type, sendDelay) {
  var connection;
  
  switch (type) {
    case net.user1.orbiter.ConnectionType.HTTP:
      if (this.system.hasHTTPDirectConnection()) {
        connection = new net.user1.orbiter.HTTPDirectConnection();
      } else {
        connection = new net.user1.orbiter.HTTPIFrameConnection();
      }
      break;
    
    case net.user1.orbiter.ConnectionType.WEBSOCKET:
      connection = new net.user1.orbiter.WebSocketConnection();
      break;
    
    default:
      throw new Error("[ORBITER] Error at buildConnection(). Invalid type specified: [" + type + "]");
  }
  
  try {
    connection.setServer(host, port);
  } catch (e) {
    this.log.error("[CONNECTION] " + connection.toString() + " " + e);
  } finally {
    this.connectionMan.addConnection(connection);
    if (connection instanceof net.user1.orbiter.HTTPConnection) {
      // Set delay after adding connection so the connection object has
      // access to this Orbiter object
      connection.setSendDelay(sendDelay);
    }
  }
};

/**
 * Connects to Union Server using the specified host and port(s).
 * 
 * @param host
 * @param port1
 * @param port2
 * @param ...
 * @param portn
 */
net.user1.orbiter.Orbiter.prototype.connect = function (host) {
  if (host != null) {
    this.setServer.apply(this, arguments);
  }
  this.log.info("[ORBITER] Connecting to Union...");
  this.connectionMan.connect();
};

net.user1.orbiter.Orbiter.prototype.disconnect = function () {
  this.connectionMan.disconnect();
};

/**
 * Assigns the host and port(s) Orbiter should use when attempting to connect to
 * Union Server. The first argument is the host address (e.g., "example.com"),
 * Subsequent arguments list the integer ports for the connection (e.g., 80). 
 * Orbiter will attempt to connect over the ports in the order specified. For 
 * example, given the code setServer("tryunion.com", 9100, 80, 443, Orbiter
 * will first attempt to connect to Union Server over port 9100; if the
 * connection fails, Orbiter will automatically next attempt to connect over 
 * port 80, if that fails, Orbiter will attempt to connect to port 443. To add 
 * multiple hosts (not just multiple ports) to Reactor's list of failover
 * connections, use ConnectionManager's addConnection() method.
 * 
 * To reduce network latency and bandwidth consumption, Orbiter automatically
 * attempts to connect via WebSocket wherever WebSocket is supported. Where
 * WebSocket is not supported, Orbiter automatically fails over to HTTP
 * communications.
 * 
 * Wherever possible, to allow maximum connection success by Union clients, 
 * Union Server should be run on port 80.
 * 
 * @param host
 * @param port1
 * @param port2
 * @param ...
 * @param portn
 */
net.user1.orbiter.Orbiter.prototype.setServer = function (host) {
  if (host != null && arguments.length > 1) {
    if (this.connectionMan.getConnections().length > 0) {
      this.connectionMan.removeAllConnections();
    }
    // Where possible, create regular WebSocketConnections for the specified
    // host and its ports.
    if (this.system.hasWebSocket()) {
      for (var i = 1; i < arguments.length; i++) {
        this.buildConnection(host, arguments[i], net.user1.orbiter.ConnectionType.WEBSOCKET, -1);
      }
    } else {
      this.log.info("[ORBITERMICRO] WebSocket not found in host environment. Trying HTTP.");
    }
    // Next, if failover is enabled or WebSocket is not supported, create HTTPConnections
    if (this.isHTTPFailoverEnabled() || !this.system.hasWebSocket()) {
      for (i = 1; i < arguments.length; i++) {
        this.buildConnection(host, 
                             arguments[i], 
                             net.user1.orbiter.ConnectionType.HTTP, 
                             net.user1.orbiter.HTTPConnection.DEFAULT_SEND_DELAY);
      }
    }
  } else {
    this.log.error("[ORBITERMICRO] setServer() failed. Invalid host or port supplied [" + arguments + "].");
  }
};

net.user1.orbiter.Orbiter.prototype.isReady = function () {
  return this.connectionMan.isReady();
};

  
//==============================================================================
// HTTP FAILOVER CONFIGURATION
//==============================================================================
net.user1.orbiter.Orbiter.prototype.enableHTTPFailover = function () {
  this.httpFailoverEnabled = true;
};

net.user1.orbiter.Orbiter.prototype.disableHTTPFailover = function () {
  this.httpFailoverEnabled = false;
};

net.user1.orbiter.Orbiter.prototype.isHTTPFailoverEnabled = function () {
  return this.httpFailoverEnabled;
};

//==============================================================================
// CONNECTION EVENT LISTENERS
//==============================================================================
/** @private */
net.user1.orbiter.Orbiter.prototype._disconnectListener = function (e) {
  this.clientID = "";
  this.dispatchClose();
};

/** @private */
net.user1.orbiter.Orbiter.prototype._connectFailureListener = function (e) {
  this.clientID = "";
  this.dispatchClose();
};

/** @private */
net.user1.orbiter.Orbiter.prototype._readyListener = function (e) {
  this.log.info("[ORBITER] Orbiter now connected and ready.");
  this.dispatchReady();
};

/** @private */
net.user1.orbiter.Orbiter.prototype._selectConnectionListener = function (e) {
  // Register to be notified when the client's ID is received 
  this.messageManager.addMessageListener("u29", this.u29, this);
  // Register to be notified when the server's "hello" message is received 
  this.messageManager.addMessageListener("u66", this.u66, this);
};

//==============================================================================    
// INSTANCE RETRIEVAL
//==============================================================================    
net.user1.orbiter.Orbiter.prototype.getLog = function () {
  return this.log;
};

net.user1.orbiter.Orbiter.prototype.getMessageManager = function () {
  return this.messageManager;
};

net.user1.orbiter.Orbiter.prototype.getConnectionManager = function () {
  return this.connectionMan;
};

net.user1.orbiter.Orbiter.prototype.getConnectionMonitor = function () {
  return this.connectionMonitor;
};

net.user1.orbiter.Orbiter.prototype.getSystem = function () {
  return this.system;
};

//==============================================================================    
// LOGGING
//==============================================================================
net.user1.orbiter.Orbiter.prototype.enableConsole = function () {
  if (this.consoleLogger == null) {
    this.consoleLogger = new net.user1.logger.ConsoleLogger(this.log);
  }
}

net.user1.orbiter.Orbiter.prototype.disableConsole = function() {
  if (this.consoleLogger != null) {
    this.consoleLogger.dispose();
    this.consoleLogger = null;
  }
};
  
//==============================================================================    
// EVENT DISPATCH
//==============================================================================
/** @private */
net.user1.orbiter.Orbiter.prototype.dispatchReady = function () {
  this.dispatchEvent(new net.user1.orbiter.OrbiterEvent(net.user1.orbiter.OrbiterEvent.READY));
}

/** @private */
net.user1.orbiter.Orbiter.prototype.dispatchClose = function () {
  this.dispatchEvent(new net.user1.orbiter.OrbiterEvent(net.user1.orbiter.OrbiterEvent.CLOSE));
}

/** @private */
net.user1.orbiter.Orbiter.prototype.dispatchProtocolIncompatible = function () {
  this.dispatchEvent(new net.user1.orbiter.OrbiterEvent(net.user1.orbiter.OrbiterEvent.PROTOCOL_INCOMPATIBLE));
}

//==============================================================================    
// TOSTRING
//==============================================================================
net.user1.orbiter.Orbiter.prototype.toString = function () {
  return "[object Orbiter]";
}
    
//==============================================================================
// CONNECTION STATE CONSTANTS
//==============================================================================
/** @class */
net.user1.orbiter.ConnectionState = new Object();
/** @constant */
net.user1.orbiter.ConnectionState.UNKNOWN                    = -1;
/** @constant */
net.user1.orbiter.ConnectionState.NOT_CONNECTED              = 0;
/** @constant */
net.user1.orbiter.ConnectionState.READY                      = 1;
/** @constant */
net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS     = 2;
/** @constant */
net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS  = 3;
/** @constant */
net.user1.orbiter.ConnectionState.LOGGED_IN                  = 4;
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class
    @extends net.user1.events.Event
*/
net.user1.orbiter.ConnectionEvent = function (type, upc, data, connection, status) {
  net.user1.events.Event.call(this, type);
  
  this.upc = upc;
  this.data = data;
  this.connection = connection
  this.status = status;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.ConnectionEvent, net.user1.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

/** @constant */
net.user1.orbiter.ConnectionEvent.BEGIN_CONNECT = "BEGIN_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionEvent.BEGIN_HANDSHAKE = "BEGIN_HANDSHAKE";
/** @constant */
net.user1.orbiter.ConnectionEvent.READY = "READY";
/** @constant */
net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE = "CONNECT_FAILURE";
/** @constant */
net.user1.orbiter.ConnectionEvent.CLIENT_KILL_CONNECT = "CLIENT_KILL_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionEvent.SERVER_KILL_CONNECT = "SERVER_KILL_CONNECT";
/** @constant */
net.user1.orbiter.ConnectionEvent.DISCONNECT = "DISCONNECT";
/** @constant */
net.user1.orbiter.ConnectionEvent.RECEIVE_UPC = "RECEIVE_UPC";
/** @constant */
net.user1.orbiter.ConnectionEvent.SEND_DATA = "SEND_DATA";
/** @constant */
net.user1.orbiter.ConnectionEvent.RECEIVE_DATA = "RECEIVE_DATA";
/** @constant */
net.user1.orbiter.ConnectionEvent.SESSION_TERMINATED = "SESSION_TERMINATED";
/** @constant */
net.user1.orbiter.ConnectionEvent.SESSION_NOT_FOUND = "SESSION_NOT_FOUND";
  
//==============================================================================
// INSTANCE METHODS
//==============================================================================

net.user1.orbiter.ConnectionEvent.prototype.getUPC = function () {
  return this.upc;
}

net.user1.orbiter.ConnectionEvent.prototype.getData = function () {
  return this.data;
}

net.user1.orbiter.ConnectionEvent.prototype.getStatus = function () {
  return this.status;
}

net.user1.orbiter.ConnectionEvent.prototype.toString = function () {
  return "[object ConnectionEvent]";
}  

//==============================================================================
// HTTP REQUEST MODE CONSTANTS
//==============================================================================
/** @class */
net.user1.orbiter.ConnectionType = new Object();
/** @constant */
net.user1.orbiter.ConnectionType.HTTP =  "HTTP";
/** @constant */
net.user1.orbiter.ConnectionType.WEBSOCKET =  "WEBSOCKET";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class

The Connection class dispatches the following events:

<ul class="summary">
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.BEGIN_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.BEGIN_HANDSHAKE}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.READY}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.CLIENT_KILL_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.SERVER_KILL_CONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.DISCONNECT}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.RECEIVE_UPC}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.SEND_DATA}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.RECEIVE_DATA}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.SESSION_TERMINATED}</li>
<li class="fixedFont">{@link net.user1.orbiter.ConnectionEvent.SESSION_NOT_FOUND}</li>
</ul>

To register for events, use {@link net.user1.events.EventDispatcher#addEventListener}.

    @extends net.user1.events.EventDispatcher
*/
net.user1.orbiter.Connection = function (host, port, type) {
  // Call superconstructor
  net.user1.events.EventDispatcher.call(this);

  // Variables
  this.mostRecentConnectAchievedReady = false;
  this.mostRecentConnectTimedOut = false;
  this.readyCount = 0;
  this.connectAttemptCount = 0;
  this.connectAbortCount = 0;
  this.readyTimeoutID = 0;
  this.readyTimeout = 0;
  this.orbiter = null;
  this.disposed = false;
  
  // Initialization
  this.setServer(host, port);
  this.connectionType = type;
  this.connectionState = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
};

//==============================================================================    
// INHERITANCE
//============================================================================== 
net.user1.utils.extend(net.user1.orbiter.Connection, net.user1.events.EventDispatcher);

//==============================================================================    
// DEPENDENCIES
//============================================================================== 
/** @private */
net.user1.orbiter.Connection.prototype.setOrbiter = function (orbiter) {
  if (this.orbiter != null) {
    this.orbiter.getMessageManager().removeMessageListener("u63", this.u63);
    this.orbiter.getMessageManager().removeMessageListener("u66", this.u66);
    this.orbiter.getMessageManager().removeMessageListener("u84", this.u84);
    this.orbiter.getMessageManager().removeMessageListener("u85", this.u85);
  }
  this.orbiter = orbiter;
}
  
//==============================================================================    
// CONNECT/DISCONNECT
//============================================================================== 
net.user1.orbiter.Connection.prototype.connect = function () {
  this.disconnect();
  this.orbiter.getLog().info("Attempting connection via " + this.toString() + ".");
  this.connectAttemptCount++;
  this.mostRecentConnectAchievedReady = false;
  this.mostRecentConnectTimedOut = false;
  this.connectionState = net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS;
  // Start the ready timer. Ready state must be achieved before the timer
  // completes or the connection will auto-disconnect.
  this.startReadyTimer();
  this.dispatchBeginConnect();
}
  
net.user1.orbiter.Connection.prototype.disconnect = function () {
  var state = this.connectionState;
 
  if (state != net.user1.orbiter.ConnectionState.NOT_CONNECTED) {
    this.deactivateConnection();
 
    if (state == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
      this.connectAbortCount++;
      this.dispatchConnectFailure("Client closed connection before READY state was achieved.");
    } else {
      this.dispatchClientKillConnect();
    }
  }
}
    
/** @private */
net.user1.orbiter.Connection.prototype.deactivateConnection = function () {
  this.connectionState = net.user1.orbiter.ConnectionState.NOT_CONNECTED;
  this.stopReadyTimer();
  this.orbiter.setSessionID("");
}
  
//==============================================================================    
// CONNECTION CONFIGURATION
//==============================================================================    
net.user1.orbiter.Connection.prototype.setServer = function (host,
                                                             port) {
  this.host  = host;
  // Check for valid ports
  if (port < 1 || port > 65536) {
    throw new Error("Illegal port specified [" + port + "]. Must be greater than 0 and less than 65537.");
  }
  this.port  = port;
}

net.user1.orbiter.Connection.prototype.getHost = function () {
  return this.host;
}

net.user1.orbiter.Connection.prototype.getPort = function () {
  return this.port;
}

net.user1.orbiter.Connection.prototype.getType = function () {
  return this.connectionType;
}
    
//==============================================================================
// READY HANDSHAKE
//==============================================================================
/** @private */
net.user1.orbiter.Connection.prototype.beginReadyHandshake = function () {
  this.dispatchBeginHandshake();
  
  if (!this.orbiter.getMessageManager().hasMessageListener("u63", this.u63)) {
    this.orbiter.getMessageManager().addMessageListener("u63", this.u63, this);
    this.orbiter.getMessageManager().addMessageListener("u66", this.u66, this);
    this.orbiter.getMessageManager().addMessageListener("u84", this.u84, this);
    this.orbiter.getMessageManager().addMessageListener("u85", this.u85, this);
  }
  
  this.sendHello();
}

/** @private */
net.user1.orbiter.Connection.prototype.sendHello = function() {
  var helloString = this.buildHelloMessage();
  this.orbiter.getLog().debug(this.toString() + " Sending CLIENT_HELLO: " + helloString);
  this.transmitHelloMessage(helloString);
}

/** @private */
net.user1.orbiter.Connection.prototype.buildHelloMessage = function () {
  var helloString = "<U><M>u65</M>"
    + "<L>"
    + "<A>" + this.orbiter.getSystem().getClientType() + "</A>"
    + "<A>" + (typeof navigator != "undefined" ? navigator.userAgent + ";" : "") 
    + this.orbiter.getSystem().getClientVersion().toStringVerbose() + "</A>"
    + "<A>" + this.orbiter.getSystem().getUPCVersion().toString() + "</A></L></U>";
  return helloString;
}

/** @private */
net.user1.orbiter.Connection.prototype.transmitHelloMessage = function (helloString) {
  this.send(helloString);
}
    
//==============================================================================
// READY TIMER
//==============================================================================
/** @private */
net.user1.orbiter.Connection.prototype.readyTimerListener = function () {
  this.stopReadyTimer();
  if (this.connectionState == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.orbiter.getLog().warn("[CONNECTION] " + this.toString() + " Failed to achieve" + 
            " ready state after " + this.readyTimeout + "ms. Aborting connection...");
    this.mostRecentConnectTimedOut = true;
    this.disconnect();
  }
}

/** @private */
net.user1.orbiter.Connection.prototype.stopReadyTimer = function () {
  if (this.readyTimeoutID != -1) {
    clearTimeout(this.readyTimeoutID);
  }
}

/** @private */
net.user1.orbiter.Connection.prototype.startReadyTimer = function () {
  var currentObj = this;
  var callback   = this.readyTimerListener;
  this.stopReadyTimer();
  this.readyTimeout = this.orbiter.getConnectionManager().getReadyTimeout();
  var self = this;
  this.readyTimeoutID = setTimeout (function () {
    callback.call(currentObj);
  }, self.readyTimeout);
}

//==============================================================================
// READY STATE ACCESS
//==============================================================================
/** @private */
net.user1.orbiter.Connection.prototype.getReadyCount = function () {
  return this.readyCount;
}
    
net.user1.orbiter.Connection.prototype.isReady = function () {
  return this.connectionState == net.user1.orbiter.ConnectionState.READY;
}

/** @private */
net.user1.orbiter.Connection.prototype.isValid = function () {
  if (this.mostRecentConnectAchievedReady) {
    this.orbiter.getLog().debug(this.toString() + " Connection is"
      + " valid because its last connection attempt succeeded.");
    return true;
  }
  
  if (this.connectAttemptCount == 0) {
    this.orbiter.getLog().debug(this.toString() + " Connection is"
      + " valid because it has either never attempted to connect, or has not"
      + " attempted to connect since its last successful connection.");
    return true;
  }
  
  if ((this.connectAttemptCount > 0) && 
      (this.connectAttemptCount == this.connectAbortCount)
      && !this.mostRecentConnectTimedOut) {
    this.orbiter.getLog().debug(this.toString() + " Connection is"
      + " valid because either all connection attempts ever or all"
      + " connection attempts since its last successful connection were"
      + " aborted before the ready timeout was reached.");
    return true;
  }
  
  this.orbiter.getLog().debug(this.toString() + " Connection is not"
    + " valid; its most recent connection failed to achieve a ready state.");
  return false;
}

    
//==============================================================================
// UPC LISTENERS
//==============================================================================
/** @private */
net.user1.orbiter.Connection.prototype.u63 = function () {
  this.stopReadyTimer();
  this.connectionState = net.user1.orbiter.ConnectionState.READY;
  this.mostRecentConnectAchievedReady = true;
  this.readyCount++;
  this.connectAttemptCount = 0;
  this.connectAbortCount   = 0;
  this.dispatchReady();
}    

/** @private */
net.user1.orbiter.Connection.prototype.u66 = function (serverVersion, 
                                                       sessionID, 
                                                       upcVersion, 
                                                       protocolCompatible) {
  this.orbiter.setSessionID(sessionID);
};

/** @private */
net.user1.orbiter.Connection.prototype.u84 = function () {
  this.dispatchSessionTerminated();
}    

/** @private */
net.user1.orbiter.Connection.prototype.u85 = function () {
  this.dispatchSessionNotFound();
}    

//==============================================================================    
// TOSTRING
//==============================================================================     
net.user1.orbiter.Connection.prototype.toString = function () {
  return "[" + this.connectionType + ", host: " + this.host + ", port: " + this.port + "]";
}
    
//==============================================================================    
// EVENT DISPATCHING
//==============================================================================  
/** @private */
net.user1.orbiter.Connection.prototype.dispatchSendData = function (data) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.SEND_DATA,
                                    null, data, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchReceiveData = function (data) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.RECEIVE_DATA,
                                    null, data, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchConnectFailure = function (status) {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE,
                                    null, null, this, status));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchBeginConnect = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.BEGIN_CONNECT,
                                    null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchBeginHandshake = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.BEGIN_HANDSHAKE,
                                    null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchReady = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.READY,
                                    null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchServerKillConnect  = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.SERVER_KILL_CONNECT,
                                    null, null, this));
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.DISCONNECT,
                                    null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchClientKillConnect = function () {
    this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.CLIENT_KILL_CONNECT,
                                      null, null, this));
    this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.DISCONNECT,
                                      null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchSessionTerminated = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.SESSION_TERMINATED,
                                    null, null, this));
}

/** @private */
net.user1.orbiter.Connection.prototype.dispatchSessionNotFound = function () {
  this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.SESSION_NOT_FOUND,
                                    null, null, this));
}

//==============================================================================    
// DISPOSAL
//==============================================================================  
/** @private */
net.user1.orbiter.Connection.prototype.dispose = function () {
  this.disposed = true;
  this.messageManager.removeMessageListener("u63", this.u63);
  this.messageManager.removeMessageListener("u66", this.u66);
  this.messageManager.removeMessageListener("u84", this.u84);
  this.messageManager.removeMessageListener("u85", this.u85);
  this.stopReadyTimer();
  this.readyTimer = null;
  this.orbiter = null;
}
//==============================================================================    
// CLASS DECLARATION
//==============================================================================
/** @class

For a list of events dispatched by WebSocketConnection, see WebSocketConnection's
superclass, {@link net.user1.orbiter.Connection}.

    @extends net.user1.orbiter.Connection
*/
net.user1.orbiter.WebSocketConnection = function (host, port) {
  // Invoke superclass constructor
  net.user1.orbiter.Connection.call(this, host, port, net.user1.orbiter.ConnectionType.WEBSOCKET);
  
  this.socket = null;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.WebSocketConnection, net.user1.orbiter.Connection);
    
//==============================================================================    
// SOCKET OBJECT MANAGEMENT
//==============================================================================
/** @private */     
net.user1.orbiter.WebSocketConnection.prototype.getNewSocket = function () {
  // Deactivate the old socket
  this.deactivateSocket(this.socket);
  
  // Create the new socket
  if (typeof MozWebSocket != "undefined") {
    // Firefox 6
    this.socket = new MozWebSocket("ws://" + this.host + ":" + this.port);
  } else {
    // Other browsers
    this.socket = new WebSocket("ws://" + this.host + ":" + this.port);
  }

  // Register for socket events
  var self = this;
  this.socket.onopen = function (e) {self.connectListener(e)};
  this.socket.onmessage = function (e) {self.dataListener(e)};
  this.socket.onclose = function (e) {self.closeListener(e)};
  this.socket.onerror = function (e) {self.ioErrorListener(e)};
};

/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.deactivateSocket = function (oldSocket) {
  if (oldSocket == null) {
    return;
  }
  
  this.socket.onopen = null;
  this.socket.onmessage = null;
  this.socket.onclose = null;
  this.socket.onerror = null;
  
  try {
    oldSocket.close()
  } catch (e) {
    // Do nothing
  }
  
  this.socket = null;
}
    
//==============================================================================    
// CONNECTION AND DISCONNECTION
//==============================================================================    
  
net.user1.orbiter.WebSocketConnection.prototype.connect = function () {
  net.user1.orbiter.Connection.prototype.connect.call(this);
      
  // Attempt to connect
  try {
    this.getNewSocket();
  } catch (e) {
    // Socket could not be opened
    this.deactivateConnection();
    this.dispatchConnectFailure(e.toString());
  }
};

/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.deactivateConnection = function () {
  this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Deactivating...");
  this.connectionState = net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS;
  this.deactivateSocket(this.socket);
  net.user1.orbiter.Connection.prototype.deactivateConnection.call(this);
};    

//==============================================================================    
// SOCKET CONNECTION LISTENERS
//==============================================================================
/** @private */     
net.user1.orbiter.WebSocketConnection.prototype.connectListener = function (e) {
  if (this.disposed) return;
  
  this.orbiter.getLog().debug(this.toString() + " Socket connected.");
  this.beginReadyHandshake();
}
  
/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.closeListener = function (e) {
  if (this.disposed) return;
  
  var state = this.connectionState;
  this.deactivateConnection();
  
  if (state == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.dispatchConnectFailure("WebSocket onclose: Server closed connection before READY state was achieved.");
  } else {
    this.dispatchServerKillConnect();
  }
};

/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.ioErrorListener = function (e) {
  if (this.disposed) return;
  
  var state = this.connectionState;
  this.deactivateConnection();
  
  // Note: when Union closes the connection, Firefox 7 dispatches onerror, not 
  // onclose, so treat onerror like an onclose event
  if (state == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.dispatchConnectFailure("WebSocket onerror: Server closed connection before READY state was achieved.");
  } else {
    this.dispatchServerKillConnect();
  }
};

//==============================================================================    
// DATA RECEIVING AND SENDING
//==============================================================================  
/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.dataListener = function (dataEvent) {
  if (this.disposed) return;

  var data = dataEvent.data;
  this.dispatchReceiveData(data);

  if (data.indexOf("<U>") == 0) {
    this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(
                                      net.user1.orbiter.ConnectionEvent.RECEIVE_UPC, 
                                      data));
  } else {
    // The message isn't UPC. Must be an error...
    this.orbiter.getLog().error(this.toString() + " Received invalid message" 
                               + " (not UPC or malformed UPC): " + data);
  }
};

/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.send = function (data) {
  this.dispatchSendData(data);
  this.socket.send(data);
};
    
// =============================================================================
// DISPOSAL
// =============================================================================
/** @private */ 
net.user1.orbiter.WebSocketConnection.prototype.dispose = function () {
  net.user1.orbiter.Connection.prototype.dispose.call(this);
  this.deactivateSocket(this.socket);
};
//==============================================================================    
// CLASS DECLARATION
//==============================================================================
/** @class

For a list of events dispatched by HTTPConnection, see HTTPConnection's
superclass, {@link net.user1.orbiter.Connection}.

    @extends net.user1.orbiter.Connection
*/
net.user1.orbiter.HTTPConnection = function (host, port) {
  // Invoke superclass constructor
  net.user1.orbiter.Connection.call(this, host, port, net.user1.orbiter.ConnectionType.HTTP);

  // Instance variables
  this.sendDelayTimerEnabled = true;
  this.sendDelayTimeoutID = -1;
  this.sendDelayTimerRunning = false;
  this.sendDelay = net.user1.orbiter.HTTPConnection.DEFAULT_SEND_DELAY;
  
  this.messageQueue = new Array();
  
  this.retryDelay = 500;
  this.retryHelloTimeoutID = -1;
  this.retryIncomingTimeoutID = -1;
  this.retryOutgoingTimeoutID = -1;

  this.helloResponsePending = false;
  this.outgoingResponsePending = false;
  
  // Initialization
  this.addEventListener(net.user1.orbiter.ConnectionEvent.SESSION_TERMINATED, this.sessionTerminatedListener, this);
  this.addEventListener(net.user1.orbiter.ConnectionEvent.SESSION_NOT_FOUND, this.sessionNotFoundListener, this);
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.HTTPConnection, net.user1.orbiter.Connection);

//==============================================================================    
// STATIC VARIABLES
//==============================================================================    
/** @constant */
net.user1.orbiter.HTTPConnection.DEFAULT_SEND_DELAY = 300;
    
//==============================================================================    
// ABSTRACT METHODS (MUST BE IMPLEMENTED BY SUBCLASSES)
//==============================================================================    
    
net.user1.orbiter.HTTPConnection.prototype.doRequestDeactivation = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doSendHello = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doRetryHello = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doSendOutgoing = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doRetryOutgoing = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doSendIncoming = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doRetryIncoming = net.user1.utils.abstractError;
net.user1.orbiter.HTTPConnection.prototype.doDispose = net.user1.utils.abstractError;
    
//==============================================================================    
// CONNECTION AND DISCONNECTION
//==============================================================================    
net.user1.orbiter.HTTPConnection.prototype.connect = function () {
  net.user1.orbiter.Connection.prototype.connect.call(this);
};
    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.deactivateConnection = function () {
  this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Deactivating...");
  this.connectionState = net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS;
  this.stopSendDelayTimer();
  if (this.retryHelloTimeoutID != -1) {
    this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Cancelling scheduled hello-request retry.");
    clearTimeout(this.retryHelloTimeoutID);
    this.retryHelloTimeoutID = -1
  }
  if (this.retryIncomingTimeoutID != -1) {
    this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Cancelling scheduled incoming-request retry.");
    clearTimeout(this.retryIncomingTimeoutID);
    this.retryIncomingTimeoutID = -1
  }
  if (this.retryOutgoingTimeoutID != -1) {
    this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Cancelling scheduled outgoing-request retry.");
    clearTimeout(this.retryOutgoingTimeoutID);
    this.retryOutgoingTimeoutID = -1
  }
  this.deactivateHTTPRequests();
  net.user1.orbiter.Connection.prototype.deactivateConnection.call(this);
};
    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.deactivateHTTPRequests = function () {
  this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Closing all pending HTTP requests.");
  this.doRequestDeactivation();
  this.helloResponsePending = false;
  this.outgoingResponsePending = false;
};

//==============================================================================    
// SESSION MANAGEMENT
//==============================================================================     

/** @private */
net.user1.orbiter.HTTPConnection.prototype.sessionTerminatedListener = function (e) {
  var state = this.connectionState;
  this.deactivateConnection();
  
  if (state == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.dispatchConnectFailure("Server terminated session before READY state was achieved.");
  } else {
    this.dispatchServerKillConnect();
  }
};

/** @private */
net.user1.orbiter.HTTPConnection.prototype.sessionNotFoundListener = function (e) {
  var state = this.connectionState;
  
  this.deactivateConnection();
  
  if (state == net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.dispatchConnectFailure("Client attempted to reestablish an expired session"
                                + " or establish an unknown session.");
  } else {
    this.dispatchServerKillConnect();
  }
}

//==============================================================================    
// OUTGOING DELAY TIMER
//==============================================================================    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.sendDelayTimerListener = function () {
  this.sendDelayTimerRunning = false;
  if (this.messageQueue.length > 0) {
    this.flushMessageQueue();
  } else {
    // No messages in queue, so take no action.
  }
}
    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.stopSendDelayTimer = function () {
  if (this.sendDelayTimeoutID != -1) {
    clearTimeout(this.sendDelayTimeoutID);
  }
  this.sendDelayTimeoutID = -1;
}
    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.startSendDelayTimer = function () {
  this.stopSendDelayTimer();
  var currentObj = this;
  var callback   = this.sendDelayTimerListener;
  this.sendDelayTimerRunning = true;
  this.sendDelayTimeoutID = setTimeout(function () {
    callback.call(currentObj);
  }, this.sendDelay);
}
    
net.user1.orbiter.HTTPConnection.prototype.setSendDelay = function (milliseconds) {
  if (milliseconds > 0) {
    if ((milliseconds != this.sendDelay)) {
      this.sendDelay = milliseconds;
      this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Send delay set to: ["
                             + milliseconds + "]."); 
    }
    this.sendDelayTimerEnabled = true;
  } else if (milliseconds == -1) {
    this.orbiter.getLog().debug("[CONNECTION] " + toString() + " Send delay disabled.");
    this.sendDelayTimerEnabled = false;
    this.stopSendDelayTimer();
  } else {
    throw new Error("[CONNECTION]" + this.toString() + " Invalid send-delay specified: [" 
                    + milliseconds + "]."); 
  }
}
    
net.user1.orbiter.HTTPConnection.prototype.getSendDelay = function () {
  return this.sendDelay;
}

//==============================================================================    
// RETRY DELAY
//============================================================================== 
net.user1.orbiter.HTTPConnection.prototype.setRetryDelay = function (milliseconds) {
  if (milliseconds > -1) {
    if (milliseconds != this.retryDelay) {
      this.retryDelay = milliseconds;
      this.orbiter.getLog().debug("[CONNECTION] " + this.toString() + " Retry delay set to: ["
                                  + milliseconds + "]."); 
    }
  } else {
    throw new Error("[CONNECTION]" + this.toString() + " Invalid retry delay specified: [" 
                    + milliseconds + "]."); 
  }
}

//==============================================================================    
// DATA SENDING AND QUEUING
//==============================================================================  
    
net.user1.orbiter.HTTPConnection.prototype.send = function (data) {
  // If the timer isn't running...
  if (!this.sendDelayTimerRunning) {
    // ...it is either disabled or expired. Either way, it's time to 
    // attempt to flush the queue.
    this.messageQueue.push(data);
    this.flushMessageQueue();
  } else {
    // The send-delay timer is running, so we can't send yet. Just queue the message.
    this.messageQueue.push(data);
  }
}
    
/** @private */
net.user1.orbiter.HTTPConnection.prototype.flushMessageQueue = function () {
  if (!this.outgoingResponsePending) {
    this.openNewOutgoingRequest(this.messageQueue.join(""));
    this.messageQueue = new Array();
  } else {
    // AN OUTGOING RESPONSE IS STILL PENDING, SO DON'T SEND A NEW ONE
  }
}

//==============================================================================    
// HELLO REQUEST MANAGEMENT
//==============================================================================  

/** @private */
net.user1.orbiter.HTTPConnection.prototype.transmitHelloMessage = function (helloString) {
  this.dispatchSendData(helloString);
  this.helloResponsePending = true;
  this.doSendHello(helloString);
}    

/** @private */
net.user1.orbiter.HTTPConnection.prototype.helloCompleteListener = function (data) {
  if (this.disposed) return;
  
  if (this.helloResponsePending) {
    this.helloResponsePending = false;
    this.processIncomingData(data);
    
    // Don't immediately open a request in the complete handler due to Win IE bug
    var self = this;
    setTimeout(function () {
      self.openNewIncomingRequest();
    }, 0);
  } else {
    if (this.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED) {
      this.orbiter.getLog().error("[CONNECTION]" + toString() + " u66 (SERVER_HELLO) received, but client is not connected. Ignoring.");
    } else {
      this.orbiter.getLog().error("[CONNECTION]" + toString() + " Redundant u66 (SERVER_HELLO) received. Ignoring.");
    }
  }
}

/** @private */
net.user1.orbiter.HTTPConnection.prototype.helloErrorListener = function () {
  if (this.disposed) return;
  // There's already a retry scheduled
  if (this.retryHelloTimeoutID != -1) return;  
  // The connection attempt has been aborted
  if (this.connectionState != net.user1.orbiter.ConnectionState.CONNECTION_IN_PROGRESS) {
    this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " u65 (CLIENT_HELLO) request failed."
                                + " Connection is no longer in progress, so no retry scheduled."); 
    return;
  }
  
  this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " u65 (CLIENT_HELLO) request failed."
                              + " Retrying in " +  this.retryDelay + "ms."); 
  
  // Retry
  var self = this;
  this.retryHelloTimeoutID = setTimeout(function () {
    self.retryHelloTimeoutID = -1;
    self.doRetryHello();
  }, this.retryDelay);
}

//==============================================================================    
// OUTGOING REQUEST MANAGEMENT
//==============================================================================

/** @private */
net.user1.orbiter.HTTPConnection.prototype.openNewOutgoingRequest = function (data) {
  this.dispatchSendData(data);
  this.outgoingResponsePending = true;
  this.doSendOutgoing(data);
  if (this.sendDelayTimerEnabled == true) {
    this.startSendDelayTimer();
  }
}

/** @private */
net.user1.orbiter.HTTPConnection.prototype.outgoingCompleteListener = function () {
  if (this.disposed) return;
  
  this.outgoingResponsePending = false;
  
  if (!this.sendDelayTimerRunning && this.messageQueue.length > 0) {
    // Don't immediately open a request in the complete handler due to Win IE bug
    var self = this;
    setTimeout(function () {
      self.flushMessageQueue();
    }, 0);
  }
}

/** @private */
net.user1.orbiter.HTTPConnection.prototype.outgoingErrorListener = function () {
  if (this.disposed) return;
  // There's already a retry scheduled
  if (this.retryOutgoingTimeoutID != -1) return;  
  // The connection has been closed
  if (this.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
      || this.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
    this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " Outgoing request failed."
                                + " Connection is closed, so no retry scheduled."); 
    return;
  } 
  
  this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " Outgoing request failed."
                              + " Retrying in " +  this.retryDelay + "ms.");  
      
  // Retry
  var self = this;
  this.retryOutgoingTimeoutID = setTimeout(function () {
    self.retryOutgoingTimeoutID = -1;
    if (self.disposed
        || self.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
        || self.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
      return;
    }
    self.doRetryOutgoing();
  }, this.retryDelay);
}

//==============================================================================    
// INCOMING REQUEST MANAGEMENT
//==============================================================================  

/** @private */
net.user1.orbiter.HTTPConnection.prototype.openNewIncomingRequest = function () {
  this.doSendIncoming();
}

/** @private */
net.user1.orbiter.HTTPConnection.prototype.incomingCompleteListener = function (data) {
  if (this.disposed
      || this.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
      || this.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
    // Incoming request complete, but connection is closed. Ignore content.
    return;
  }
  
  // Don't immediately open a request in the complete handler due to Win IE bug
  var self = this;
  setTimeout(function () {
    self.processIncomingData(data);
    // A message listener might have closed this connection in response to an incoming
    // message. Do not open a new incoming request unless the connection is still open.
    if (self.disposed
        || self.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
        || self.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
      return;
    }
    self.openNewIncomingRequest();
  }, 0);
}

/** @private */
net.user1.orbiter.HTTPConnection.prototype.incomingErrorListener = function () {
  if (this.disposed) return;
  // There's already a retry scheduled
  if (this.retryIncomingTimeoutID != -1) return;  
  // The connection has been closed
  if (this.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
      || this.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
    this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " Incoming request failed."
                                + " Connection is closed, so no retry scheduled."); 
    return;
  } 

  this.orbiter.getLog().error("[CONNECTION]" + this.toString() + " Incoming request failed." 
                              + " Retrying in " +  this.retryDelay + "ms."); 
      
  // Retry
  var self = this;
  this.retryIncomingTimeoutID = setTimeout(function () {
    self.retryIncomingTimeoutID = -1;
    if (self.disposed
        || self.connectionState == net.user1.orbiter.ConnectionState.NOT_CONNECTED
        || self.connectionState == net.user1.orbiter.ConnectionState.DISCONNECTION_IN_PROGRESS) {
      return;
    }
    self.doRetryIncoming();
  }, this.retryDelay);
}
    
//==============================================================================    
// PROCESS DATA FROM THE SERVER
//==============================================================================
 
/** @private */
net.user1.orbiter.HTTPConnection.prototype.processIncomingData = function (data) {
  if (this.disposed) return;
  var listeners;
  
  this.dispatchReceiveData(data);
  
  var upcs = new Array();
  var upcEndTagIndex = data.indexOf("</U>");
  // Empty responses are valid.
  if (upcEndTagIndex == -1 && data.length > 0) {
    this.orbiter.getLog().error("Invalid message received. No UPC found: [" + data + "]");
    if (!this.isReady()) {
      // If invalid XML is received prior to achieving ready, then this
      // probably isn't a Union server, so disconnect.
      this.disconnect();
      return;
    }
  }
  
  while (upcEndTagIndex != -1) {
    upcs.push(data.substring(0, upcEndTagIndex+4));
    data = data.substring(upcEndTagIndex+4);
    upcEndTagIndex = data.indexOf("</U>");
  }
  for (var i = 0; i < upcs.length; i++) {
    this.dispatchEvent(new net.user1.orbiter.ConnectionEvent(net.user1.orbiter.ConnectionEvent.RECEIVE_UPC, upcs[i]));
  }
}

//==============================================================================    
// TOSTRING
//==============================================================================     
net.user1.orbiter.HTTPConnection.prototype.toString = function () {
  return "[" + this.connectionType + ", host: " + this.host + ", port: " + this.port + ", send-delay: " + this.getSendDelay() + "]";
}
    
// =============================================================================
// DISPOSAL
// =============================================================================
/** @private */ 
net.user1.orbiter.HTTPConnection.prototype.dispose = function () {
  this.doDispose();
  this.stopSendDelayTimer();
  net.user1.orbiter.Connection.prototype.dispose.call(this);
}
//==============================================================================    
// CLASS DECLARATION
//==============================================================================
/** @class

For a list of events dispatched by HTTPDirectConnection, 
{@link net.user1.orbiter.Connection}.

    @extends net.user1.orbiter.HTTPConnection
*/
net.user1.orbiter.HTTPIFrameConnection = function (host, port) {
  // Invoke superclass constructor
  net.user1.orbiter.HTTPConnection.call(this, host, port);
  this.postMessageInited = false;
  this.iFrameReady = false;
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.HTTPIFrameConnection, net.user1.orbiter.HTTPConnection);

//==============================================================================    
// POSTMESSAGE INITIALIZATION
//==============================================================================   
/** @private */ 
net.user1.orbiter.HTTPIFrameConnection.prototype.initPostMessage = function () {
  if (this.postMessageInited) {
    throw new Error("[HTTPIFrameConnection] Illegal duplicate initialization attempt.");
  }
  var self = this;
  var win = this.orbiter.window;
  var errorMsg = null;
  
  if (win == null) {
    errorMsg = "[HTTPIFrameConnection] Unable to create connection." 
               + " No window object found.";
  } else {
    if (typeof win.addEventListener != "undefined") {
      // ...the standard way 
      win.addEventListener("message", postMessageListener, false);
    } else if (typeof win.attachEvent != "undefined") {
      // ...the IE-specific way 
      win.attachEvent("onmessage", postMessageListener);
    } else {
      errorMsg = "[HTTPIFrameConnection] Unable to create connection."
               + " No event listener registration method found on window object.";
    }
  }
  
  if (errorMsg != null) {
    this.orbiter.getLog().error(errorMsg);
    throw new Error(errorMsg);
  }

  /** @private */
  function postMessageListener (e) {
    if (e.origin != ("http://" + self.host + (self.port == 80 ? "" : (":" + self.port)))) {
      self.orbiter.getLog().error("[CONNECTION] " + self.toString() 
        + " Ignored message from unknown origin: " + e.origin);
      return;
    }
    
    self.processPostMessage(e.data);
  }
  
  this.postMessageInited = true;
};

//==============================================================================    
// IFRAME MANAGEMENT
//==============================================================================    
/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.makeIFrame = function () {
  if (typeof this.orbiter.window.document == "undefined") {
    var errorMsg = "[HTTPIFrameConnection] Unable to create connection."
                 + " No document object found.";
    this.orbiter.getLog().error(errorMsg);
    throw new Error(errorMsg);
  }
  var doc = this.orbiter.window.document;
  
  this.iFrameReady = false;
  if (this.iframe != null) {
    this.postToIFrame("dispose");
    doc.body.removeChild(this.iframe);
  }
  this.iframe = doc.createElement('iframe');
  this.iframe.width = "0px";
  this.iframe.height = "0px";
  this.iframe.border = "0px";
  this.iframe.frameBorder = "0";
  this.iframe.style.visibility = "hidden";
  this.iframe.style.display = "none";
  this.iframe.src = "http://" + this.host + ":" + this.port + "/orbiter";
  doc.body.appendChild(this.iframe);
}

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.onIFrameReady = function () {
  this.beginReadyHandshake();
}

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.postToIFrame = function (cmd, data) {
  if (this.iframe && this.iFrameReady) {
    data = data == undefined ? "" : data;
    this.iframe.contentWindow.postMessage(cmd + "," + data, "http://" + this.host + ":" + this.port);
  }  
}

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.processPostMessage = function (postedData) {
  var delimiterIndex = postedData.indexOf(",");
  var cmd  = postedData.substring(0, delimiterIndex);
  var data = postedData.substring(delimiterIndex+1);
  
  switch (cmd) {
    case"ready":
      this.iFrameReady = true;
      this.onIFrameReady();
      break;
      
    case "hellocomplete":
      this.helloCompleteListener(data);
      break;
    
    case "helloerror":
      this.helloErrorListener();
      break;
    
    case "outgoingcomplete":
      this.outgoingCompleteListener();
      break;
    
    case "outgoingerror":
      this.outgoingErrorListener();
      break;
    
    case "incomingcomplete":
      this.incomingCompleteListener(data);
      break;
    
    case "incomingerror":
      this.incomingErrorListener();
      break;
  }
}

//==============================================================================    
// CONNECTION AND DISCONNECTION
//==============================================================================    
net.user1.orbiter.HTTPIFrameConnection.prototype.connect = function () {
  if (!this.postMessageInited) {
    this.initPostMessage();
  }
  
  net.user1.orbiter.HTTPConnection.prototype.connect.call(this);
  this.makeIFrame();
};

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doRequestDeactivation = function() {
  this.postToIFrame("deactivate");
};

//==============================================================================    
// UPC LISTENERS (IFRAME-SPECIFIC IMPLEMENTATION)
//==============================================================================

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.u66 = function (serverVersion, 
                                                           sessionID, 
                                                           upcVersion, 
                                                           protocolCompatible) {
  net.user1.orbiter.Connection.prototype.u66.call(this,
                                                  serverVersion,
                                                  sessionID,
                                                  upcVersion,
                                                  protocolCompatible);
  if (this.iframe != null) {
    this.postToIFrame("sessionid", sessionID);
  }
}

//==============================================================================    
// HELLO REQUEST MANAGEMENT
//==============================================================================  

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doSendHello = function (helloString) {
  this.postToIFrame("sendhello", helloString);
};

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doRetryHello = function () {
  this.postToIFrame("retryhello");
}

//==============================================================================    
// OUTGOING REQUEST MANAGEMENT
//==============================================================================

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doSendOutgoing = function (data) {
  this.postToIFrame("sendoutgoing", data);
};

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doRetryOutgoing = function () {
  this.postToIFrame("retryoutgoing");
};

//==============================================================================    
// INCOMING REQUEST MANAGEMENT
//==============================================================================  

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doSendIncoming = function () {
  this.postToIFrame("sendincoming");
};

/** @private */
net.user1.orbiter.HTTPIFrameConnection.prototype.doRetryIncoming = function () {
  this.postToIFrame("retryincoming");
};
    
//==============================================================================    
// TOSTRING
//==============================================================================     
net.user1.orbiter.HTTPIFrameConnection.prototype.toString = function () {
  return "[HTTPIFrameConnection, host: " + this.host + ", port: " + this.port + ", send-delay: " + this.getSendDelay() + "]";
};
    
//==============================================================================
// DISPOSAL
//==============================================================================
/** @private */ 
net.user1.orbiter.HTTPIFrameConnection.prototype.doDispose = function () {
  this.postToIFrame("dispose");
};
//==============================================================================    
// CLASS DECLARATION
//==============================================================================
/** @class

For a list of events dispatched by HTTPDirectConnection, 
{@link net.user1.orbiter.Connection}.

    @extends net.user1.orbiter.HTTPConnection
*/
net.user1.orbiter.HTTPDirectConnection = function (host, port) {
  // Invoke superclass constructor
  net.user1.orbiter.HTTPConnection.call(this, host, port);
  
  this.outgoingRequestID = 0;
  this.incomingRequestID = 0;
  
  this.lastOutgoingPostData = null;
  this.lastIncomingPostData = null;
  this.lastHelloPostData    = null;
  
  this.pendingRequests = [];
};

//==============================================================================
// INHERITANCE
//==============================================================================
net.user1.utils.extend(net.user1.orbiter.HTTPDirectConnection, net.user1.orbiter.HTTPConnection);


//==============================================================================    
// CONNECTION AND DISCONNECTION
//==============================================================================    
net.user1.orbiter.HTTPDirectConnection.prototype.connect = function () {
  net.user1.orbiter.HTTPConnection.prototype.connect.call(this);
  this.beginReadyHandshake();
};

//==============================================================================    
// HELLO REQUEST MANAGEMENT
//==============================================================================  

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doSendHello = function (helloString) {
  this.newHelloRequest(helloString);
};

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doRetryHello = function () {
  this.retryHello();
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.newHelloRequest = function (data) {
  this.lastHelloPostData = this.createHelloPostData(encodeURIComponent(data));
  this.transmitRequest(this.lastHelloPostData, 
                       net.user1.orbiter.HTTPDirectConnection.helloRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.helloRequestErrorListener);
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.createHelloPostData = function (data) {
  return "mode=d" + "&data=" + data;
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.retryHello = function () {
  this.transmitRequest(this.lastHelloPostData, 
                       net.user1.orbiter.HTTPDirectConnection.helloRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.helloRequestErrorListener);
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.helloRequestReadystatechangeListener = function (xhr, connection) {
  if (xhr.readyState == 4) {
    connection.removePendingRequest(xhr);
    if (xhr.status >= 200 && xhr.status <= 299) {
      connection.helloCompleteListener(xhr.responseText);
    } else {
      connection.helloErrorListener();
    }
  }
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.helloRequestErrorListener = function (xhr, connection) {
  connection.removePendingRequest(xhr);
  connection.helloErrorListener();
}

//==============================================================================    
// OUTGOING REQUEST MANAGEMENT
//==============================================================================

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doSendOutgoing = function (data) {
  this.newOutgoingRequest(data);
};

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doRetryOutgoing = function () {
  this.retryOutgoing();
};

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.newOutgoingRequest = function (data) {
  this.lastOutgoingPostData = this.createOutgoingPostData(encodeURIComponent(data));
  this.transmitRequest(this.lastOutgoingPostData, 
                       net.user1.orbiter.HTTPDirectConnection.outgoingRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.outgoingRequestErrorListener);
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.createOutgoingPostData = function (data) {
  this.outgoingRequestID++;
  return "rid=" + this.outgoingRequestID + "&sid=" + this.orbiter.getSessionID() + "&mode=s" + "&data=" + data;
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.retryOutgoing = function () {
  this.transmitRequest(this.lastOutgoingPostData, 
                       net.user1.orbiter.HTTPDirectConnection.outgoingRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.outgoingRequestErrorListener);
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.outgoingRequestReadystatechangeListener = function (xhr, connection) {
  if (xhr.readyState == 4) {
    connection.removePendingRequest(xhr);
    if (xhr.status >= 200 && xhr.status <= 299) {
      connection.outgoingCompleteListener();
    } else {
      connection.outgoingErrorListener();
    }
  }
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.outgoingRequestErrorListener = function (xhr, connection) {
  connection.removePendingRequest(xhr);
  connection.outgoingErrorListener();
}

//==============================================================================    
// INCOMING REQUEST MANAGEMENT
//==============================================================================  

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doSendIncoming = function () {
  this.newIncomingRequest();
};

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doRetryIncoming = function () {
  this.retryIncoming();
};

/** @private */ 
net.user1.orbiter.HTTPDirectConnection.prototype.newIncomingRequest = function () {
  this.lastIncomingPostData = this.createIncomingPostData();
  this.transmitRequest(this.lastIncomingPostData,
                       net.user1.orbiter.HTTPDirectConnection.incomingRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.incomingRequestErrorListener);
}

/** @private */ 
net.user1.orbiter.HTTPDirectConnection.prototype.createIncomingPostData = function () {
  this.incomingRequestID++;
  return "rid=" + this.incomingRequestID + "&sid=" + this.orbiter.getSessionID() + "&mode=c";
}

/** @private */ 
net.user1.orbiter.HTTPDirectConnection.prototype.retryIncoming = function () {
  this.transmitRequest(this.lastIncomingPostData,
                       net.user1.orbiter.HTTPDirectConnection.incomingRequestReadystatechangeListener,
                       net.user1.orbiter.HTTPDirectConnection.incomingRequestErrorListener);
}

/** @private */ 
net.user1.orbiter.HTTPDirectConnection.incomingRequestReadystatechangeListener = function (xhr, connection) {
  if (xhr.readyState == 4) {
    connection.removePendingRequest(xhr);
    if (xhr.status >= 200 && xhr.status <= 299) {
      connection.incomingCompleteListener(xhr.responseText);
    } else {
      connection.incomingErrorListener();
    }
  }
}

/** @private */ 
net.user1.orbiter.HTTPDirectConnection.incomingRequestErrorListener = function (xhr, connection) {
  connection.removePendingRequest(xhr);
  connection.incomingErrorListener();
}

//==============================================================================
// XHR MANAGEMENT
//==============================================================================
/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.transmitRequest = function (data, 
                                                      readystatechangeListener, 
                                                      errorListener) {
  var self = this;
  var request;
  
  if (typeof XDomainRequest != "undefined") {
    // IE
    request = new XDomainRequest();
    request.onload = function () {
      request.readyState = 4;  // Emulate standards-based API
      request.status = 200;
      readystatechangeListener(this, self)
    };
    request.onerror = function () {
      errorListener(this, self);
    };
    request.ontimeout = function () {
      errorListener(this, self);
    };
    request.onprogress = function () {}; // Do nothing (required)
  } else {
    // All other standards-based browsers
    var request = new XMLHttpRequest();
    this.pendingRequests.push(request);
    request.onreadystatechange = function () {
      readystatechangeListener(this, self);
    };
    request.onerror = function () {
      errorListener(this, self);
    };
  }
  // Call open before setting header
  request.open("POST", "http://" + this.host + ":" + this.port);
  // Standards-based browsers (IE doesn't allow the setting of headers)
  if (typeof request.setRequestHeader != "undefined") {
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  }
  request.send(data);
}

/** @private */
net.user1.orbiter.HTTPDirectConnection.prototype.removePendingRequest = function (request) {
  for (var i = this.pendingRequests.length; --i >= 0; ) {
    if (this.pendingRequests[i] === request) {
      this.pendingRequests.splice(i, 1);
    }
  }
}

/** @private Abstract method implementation */
net.user1.orbiter.HTTPDirectConnection.prototype.doRequestDeactivation = function () {
  for (var i = this.pendingRequests.length; --i >= 0;) {
    try {
      this.pendingRequests[i].abort();
    } catch (e) {
      // Do nothing
    }
  }
  this.pendingRequests = [];
}
    
//==============================================================================    
// TOSTRING
//==============================================================================     
net.user1.orbiter.HTTPDirectConnection.prototype.toString = function () {
  return "[HTTPDirectConnection, host: " + this.host + ", port: " + this.port + ", send-delay: " + this.getSendDelay() + "]";
};
    
//==============================================================================
// DISPOSAL
//==============================================================================
/** @private */ 
net.user1.orbiter.HTTPDirectConnection.prototype.doDispose = function () {
  this.deactivateHTTPRequests();
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @private */
net.user1.orbiter.MessageListener = function (listener,
                                              forRoomIDs,
                                              thisArg) {
  this.listener   = listener;
  this.forRoomIDs = forRoomIDs;
  this.thisArg    = thisArg;
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================
/** @private */
net.user1.orbiter.MessageListener.prototype.getListenerFunction = function () {
  return this.listener;
};
    
/** @private */
net.user1.orbiter.MessageListener.prototype.getForRoomIDs = function () {
  return this.forRoomIDs;
};
    
/** @private */
net.user1.orbiter.MessageListener.prototype.getThisArg = function () {
  return this.thisArg;
};

/** @private */
net.user1.orbiter.MessageListener.prototype.toString = function () {
  return "[object MessageListener]";
};
//==============================================================================
// CLASS DECLARATION
//==============================================================================
/** @class */
net.user1.orbiter.MessageManager = function (log, connectionManager) {
  this.log = log;
  this.messageListeners = new Object();
  this.removeListenersOnDisconnect = true;
  this.numMessagesReceived = 0;
  this.numMessagesSent = 0;
  this.currentConnection = null;
  this.connectionManager = connectionManager;
  this.connectionManager.addEventListener(net.user1.orbiter.ConnectionManagerEvent.SELECT_CONNECTION,
                                          this.selectConnectionListener, this);
};

//==============================================================================
// INSTANCE METHODS
//==============================================================================
/** @private */
net.user1.orbiter.MessageManager.prototype.selectConnectionListener = function (e) {
  if (this.currentConnection != null) {
    this.currentConnection.removeEventListener(net.user1.orbiter.ConnectionEvent.RECEIVE_UPC, 
                                          this.upcReceivedListener);
    this.currentConnection.removeEventListener(net.user1.orbiter.ConnectionEvent.DISCONNECT,
                                          this.disconnectListener);
    this.currentConnection.removeEventListener(net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE,
                                          this.connectFailureListener);
  }

  this.currentConnection = e.getConnection(); 

  this.currentConnection.addEventListener(net.user1.orbiter.ConnectionEvent.RECEIVE_UPC, 
                                        this.upcReceivedListener, this);
  this.currentConnection.addEventListener(net.user1.orbiter.ConnectionEvent.DISCONNECT,
                                        this.disconnectListener, this);
  this.currentConnection.addEventListener(net.user1.orbiter.ConnectionEvent.CONNECT_FAILURE,
                                        this.connectFailureListener, this);
}
  
/** @private */
net.user1.orbiter.MessageManager.prototype.disconnectListener = function (e) {
  this.cleanupAfterClosedConnection(e.target);
}
    
/** @private */
net.user1.orbiter.MessageManager.prototype.connectFailureListener = function (e) {
  this.cleanupAfterClosedConnection(e.target);
}
    
/** @private */
net.user1.orbiter.MessageManager.prototype.cleanupAfterClosedConnection = function (connection) {
  var listenerList;
  if (this.removeListenersOnDisconnect) {
    this.log.info("[MESSAGE_MANAGER] Removing registered message listeners.");
    for (var message in this.messageListeners) {
      listenerList = this.messageListeners[message];
      for (var p in listenerList) {
        this.removeMessageListener(message, listenerList[p].getListenerFunction());
      } 
    }
  } else {
    this.log.warn("[MESSAGE_MANAGER] Leaving message listeners registered. \n"
      + "Be sure to remove any unwanted message listeners manually.");
  }
  
  this.numMessagesReceived = 0;
  this.numMessagesSent = 0;
}
  
net.user1.orbiter.MessageManager.prototype.sendUPC = function (message) {
  // Quit if the connection isn't ready...
  if (!this.connectionManager.isReady()) {
    this.log.warn("[MESSAGE_MANAGER] Connection not ready. UPC not sent. Message: " 
    + message);
    return;
  }

  // Build the UPC to send.
  var theUPC = "<U><M>" + message + "</M>";
  var a;
  
  if (arguments.length > 1) {
    theUPC += "<L>";
    for (var i = 1; i < arguments.length; i++) {
      a = arguments[i];
      a = a == undefined ? "" : a.toString();
      // Wrap any non-filter argument that contains a start tag ("<") in CDATA
      if (a.indexOf("<") != -1) {
        if (a.indexOf('<f t=') != 0) {
          a = "<![CDATA[" + a + "]]>";
        }
      }
      theUPC += "<A>" + a + "</A>";
    }
    theUPC += "</L>";
  }
  theUPC += "</U>";
  
  // Send the UPC to the server
  this.log.debug("[MESSAGE_MANAGER] UPC sent: " + theUPC);
  this.connectionManager.getActiveConnection().send(theUPC);
};

/** @private */
net.user1.orbiter.MessageManager.prototype.upcReceivedListener = function (e) {
  var upc = e.getUPC();
  this.log.debug("[MESSAGE_MANAGER] UPC received: " + upc );
  
  var method;
  var upcArgs = new Array();
  
  var closeMTagIndex = upc.indexOf("</M>");
  method = upc.substring(6, closeMTagIndex);
  
  var searchBeginIndex = upc.indexOf("<A>", closeMTagIndex);
  var closeATagIndex;
  var arg;
  while (searchBeginIndex != -1) {
    closeATagIndex = upc.indexOf("</A>", searchBeginIndex);
    arg = upc.substring(searchBeginIndex+3, closeATagIndex);
    if (arg.indexOf("<![CDATA[") == 0) {
      arg = arg.substr(9, arg.length-12);
    }
    upcArgs.push(arg);
    searchBeginIndex = upc.indexOf("<A>", closeATagIndex);
  }     
  
  this.notifyMessageListeners(method, upcArgs);
};

net.user1.orbiter.MessageManager.prototype.addMessageListener = function (message, 
                                                                          listener,
                                                                          thisArg,
                                                                          forRoomIDs) {
  if (forRoomIDs != null) {
    var typeString = Object.prototype.toString.call(forRoomIDs);
    if (typeString != "[object Array]") {
      throw new Error("[MESSAGE_MANAGER] Illegal argument type " + typeString
                      + " supplied for addMessageListener()'s forRoomIDs"
                      + " parameter. Value must be an Array.");
    }
  }
  
  // Each message gets a list of MessageListener objects. 
  // If this message has no such list, make one.
  if (this.messageListeners[message] === undefined) {
    this.messageListeners[message] = new Array();
  } 
  var listenerArray = this.messageListeners[message];
  
  // Quit if the listener is already registered
  if (this.hasMessageListener(message, listener)) {
    return false;
  }
  
  // Add the listener
  var newListener = new net.user1.orbiter.MessageListener(listener,
                                            forRoomIDs === undefined ? null : forRoomIDs,
                                            thisArg);
  listenerArray.push(newListener);
  return true;      
};

net.user1.orbiter.MessageManager.prototype.removeMessageListener = function (message,
                                                           listener) {
  // Quit if the message has no listeners
  var listenerArray = this.messageListeners[message];
  if (listenerArray == null) {
    return false;
  } 
  
  // Remove the listener
  var foundListener;
  for (var i = 0; i < listenerArray.length; i++) {
    if (listenerArray[i].getListenerFunction() == listener) {
      foundListener = true;
      listenerArray.splice(i, 1);
      break;
    }
  }
  
  // Delete the listeners array if it's now empty
  if (listenerArray.length == 0) {
    delete this.messageListeners[message];
  }
  
  return foundListener;      
};
    
net.user1.orbiter.MessageManager.prototype.hasMessageListener = function (message, 
                                                        listener) {
  // Quit if the message has no listeners
  var listenerArray = this.messageListeners[message];
  if (listenerArray == null) {
    return false;
  } 
      
   // Check for the listener
  for (var i = 0; i < listenerArray.length; i++) {
    if (listenerArray[i].getListenerFunction() 
      == listener) {
      return true;
    }
  }
  return false;
};
    
net.user1.orbiter.MessageManager.prototype.getMessageListeners = function (message) {
  return this.messageListeners[message] != undefined ? this.messageListeners[message] : [];
};

/** @private */
net.user1.orbiter.MessageManager.prototype.notifyMessageListeners = function (message, args) {
  // Retrieve the list of listeners for this message.
  var listeners = this.messageListeners[message];
  // If there are no listeners registered, then quit
  if (listeners === undefined) {
    // Log a warning if it's not a UPC
    if (!(message.charAt(0) == "u" && parseInt(message.substring(1)) > 1)) {
      this.log.warn("Message delivery failed. No listeners found. Message: " + 
               message + ". Arguments: " + args.join());
    }
    return;
  } else {
    listeners = listeners.slice(0);    
  }
  var numListeners = listeners.length; 
  for (var i = 0; i < numListeners; i++) {
    listeners[i].getListenerFunction().apply(listeners[i].getThisArg(), args);
  }
};

net.user1.orbiter.MessageManager.prototype.toString = function () {
  return "[object MessageManager]";
};

//==============================================================================
// LOADED FLAG
//==============================================================================
/** 
 * @constant 
 * 
 * Indicates that Orbiter has finished loading.
 */
net.user1.orbiter.LOADED = true;

})((typeof window == "undefined") ? this : window);
