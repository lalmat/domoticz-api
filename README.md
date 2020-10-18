# domoticz-api

## **Warning** : Work in progress.

The goal of this project is to have an object to easely access a [Domoticz](https://www.domoticz.com) instance. Devices, user variables, send notifications, etc. will be accessible with just function calls. With Domoticz API, it's very easy to build  awesome frontend with javascript frameworks like Vue / React / Angular. 

This API uses the interfaces as defined at Domoticz API/JSON URL's. This page does not describe all available url's. This API also uses some 'undocumented' api url's.

## This is a "working" but beta version

You can use this lib as an import, or directly thru the browser.

### Browser Usage :
```html
    <script src="path_to/domoticz-api/dist/bundle.js"></script>
    <script>
        var api = new Domoticz.API(YOUR_HOST, {
            useSSL : true,
            username: YOUR_USERNAME,
            password: YOUR_PASSWORD
        });
    </script>
```

To see it in action, clone this repo, and go to demo/browser, then open index.html in you browser.

## Todos:
I'm actually focused on retrieving datas (Events / Camera / Devices). Then, I'll add domoticz management functions to add / delete devices.
