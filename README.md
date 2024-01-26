--------- CUSTOM COLOR CHANGE SIMULATOR IN 3D OBJECTS ---------

--------- Follow these steps to make it work in any case ! ----

1. Call all necessary scripts:

<link rel="stylesheet" href="ColorSimujs/css/style.css">
<link rel="preload" as="style" href="ColorSimujs/css/style.css">

<script src="ColorSimujs/core/modernizr/modernizr-2.6.2.min.js"></script><br/><br/>
<script src="ColorSimujs/vendor/jsc3d/jsc3d.js"></script><br/><br/>
<script src="ColorSimujs/vendor/jsc3d/jsc3d.touch.js"></script><br/><br/>
<script src="ColorSimujs/vendor/jsc3d/jsc3d.webgl.js"></script><br/><br/>
<script src="ColorSimujs/vendor/jsc3d/jsc3d.3ds.js"></script><br/><br/>

--------------------------------- ATENTION !! ---------------------------------<br/>

- There's an array variable called "modelsArray" that need to be populated with the 3d objects's URL for the object to be rendered into the <canvas> Tag.<br/>
- It needs to be populated before calling the main.js file

Ex.

<script><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modelsArray = [];<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.querySelectorAll('.simulador .owl-carousel img').forEach(function(){<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modelsArray.push(img.parentElement.dataset.url);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br/>
</script><br/><br/>
<script src="ColorSimujs/app/main.js"></script><br/><br/>

-------------------------------------------------------------------------------

2. There's two main functions that can be used to change both the Color and the 3D Model on the Page:

- To change the Object's color, use:

    - colorSimulator.update(HexString,colorCode);

    - Parameters: 

        - HexString - The color to be changed and applied into the Object.
          Default: #FADF60

        - colorCode - The code of the specified color.
          Default: MB-PE-C + HexString

- To change the 3D Model, use:

    - viewer.replaceSceneFromUrl(objectUrl);

    - Parameters:

        - objectUrl - The Object URL.
          Default: dove.obj

-------------------------------------------------------------------------------

3. Wordpress's Media Library doesn't allow .obj or .mtl file types for security measures, to enable unallowed file types, add the following code inside the functions.php file. That will make the Wordpress's Media Library treat the files as .txt

-------------------------------------------------------------------------------

function custom_mime_types($mime_types) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$mime_types['obj'] = 'text/plain';<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return $mime_types;<br/>
}<br/>
add_filter('upload_mimes', 'custom_mime_types');<br/>

-------------------------------------------------------------------------------

4. The HTML Structure for the Library is:

&lt;div id="canvas"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="colorcode"&gt;&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;canvas id="viewer" width="800" height="575"&gt;&lt;/canvas&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="arrows"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="prev"&gt;&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="next"&gt;&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/><br/><br/>

![Alt text](./colorsimujs.png)
