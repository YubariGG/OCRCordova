# OCRCordova
Integrate HTML5, apache cordova ocr reader in mobile apk.

This proyect is orientated to Mobility aplications. It uses standard MVC UI5 web deployment html5 mode.

The way to make it mobile is using apache cordova framework.
https://cordova.apache.org/ 

To create new proyect simply use:

``` cordova create projectname com.yourcompany.app ```

Then, add neccessary platforms and plugins. IN my case I used:

``` cordova platforms add android ```

Then 

``` cordova plugins add cordova-plugin-camera ```
``` cordova plugins add cordova-plugin-mobile-ocr ```

Then adapt your interface and you can use navigator functions like camera and texocr context.

Developed on february 2021 forgeneral purposes.

