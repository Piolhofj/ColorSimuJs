------------------------------ CUSTOM COLOR CHANGE SIMULATOR IN 3D OBJECTS ------------------------------

------------------------------ Follow these steps to make it work in any case ! -------------------------

1. Call all necessary `scripts`:
```bash
<link rel="stylesheet" href="ColorSimujs/css/style.css">
```
```bash
<link rel="preload" as="style" href="ColorSimujs/css/style.css">
```
```bash
<script src="ColorSimujs/core/modernizr/modernizr-2.6.2.min.js"></script>
```
```bash
<script src="ColorSimujs/vendor/jsc3d/jsc3d.js"></script>
```
```bash
<script src="ColorSimujs/vendor/jsc3d/jsc3d.touch.js"></script>
```
```bash
<script src="ColorSimujs/vendor/jsc3d/jsc3d.webgl.js"></script>
```
```bash
<script src="ColorSimujs/vendor/jsc3d/jsc3d.3ds.js"></script>
```

--------------------------------- ATENTION !! ---------------------------------<br/>

- There's an array variable called `modelsArray` that need to be populated with the 3d objects's URL for the object to be rendered into the <canvas> Tag.<br/>
- It needs to be populated before calling the `main.js` file

Ex.
```bash
<script>
    modelsArray = [];
    document.querySelectorAll('.simulador .owl-carousel img').forEach(function(){
        modelsArray.push(img.parentElement.dataset.url);
    });
</script>
```
```bash
<script src="ColorSimujs/app/main.js"></script>
```

-------------------------------------------------------------------------------

2. There's two main functions that can be used to change both the Color and the 3D Model on the Page:

- To change the Object's color, use:
  ```bash
    - colorSimulator.update(HexString,colorCode);
  ```

    - Parameters: 

        - `HexString` - The color to be changed and applied into the Object.
          `Default: #FADF60`

        - `colorCode` - The code of the specified color.
          `Default: MB-PE-C + HexString`

- To change the 3D Model, use:
    ```bash
    - viewer.replaceSceneFromUrl(objectUrl);
    ```

    - Parameters:

        - `objectUrl` - The Object URL.
          `Default: dove.obj`

-------------------------------------------------------------------------------

3. `Wordpress's Media Library` doesn't allow .obj or .mtl file types for security measures, to enable unallowed file types, add the following code inside the `functions.php` file. That will make the Wordpress's Media Library treat the files as `.txt`

```bash
function custom_mime_types($mime_types)
    $mime_types['obj'] = 'text/plain';
    return $mime_types;
}
add_filter('upload_mimes', 'custom_mime_types');
```

-------------------------------------------------------------------------------

4. The HTML Structure for the Library is:
```bash
<div id="canvas">
    <div class="colorcode"></div>
    <canvas id="viewer" width="800" height="575"></canvas>
    <div class="arrows">
        <div class="prev"></div>
        <div class="next"></div>
    </div>
</div>
```

![Alt text](./colorsimujs.png)
