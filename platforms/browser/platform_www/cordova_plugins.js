cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
        "id": "cordova-sqlite-ext.SQLitePlugin",
        "pluginId": "cordova-sqlite-ext",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-sqlite-storage": "2.3.3",
    "cordova-sqlite-ext": "2.2.0"
}
// BOTTOM OF METADATA
});