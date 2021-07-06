Editoi Reference
========================

This guide is a very brief overview about how to use Editoi


## Step 1

In top page click the "Render button" to enable and disable render markdown and show the images of this tutorial

![](images/tutorial/renderButton.png)


## Slots

There are 4 slots to open four simultaneous projects. Select a slot and click "Open" to open a project

![](images/tutorial/slots.png)


## Folders

The projects are save in the projects folder

![](images/tutorial/projects.png)

## Save

Click "Save" to save a file. Or click "Ctrl+S"

## Drag

The files can be drag to correct execution order

![](images/tutorial/drag.png)


## Compilation

Click "Run" to compile. 

All files from same type are save in a single file named "main.extension" in the folder "www" of project

If module selected is ".html", then the project is run in other window. Or then, is open folder project.


## Slider

Click the "Slider" to run server from this project in port default 9001

![](images/tutorial/slider.png)


## Only

Add the comment "//only" or "#only" or "*only" to ignore all files and compile only this file in "main.extension". 

![](images/tutorial/only.png)

## Disable

Add the comment "//disable" to ignore this file in compilation. 

![](images/tutorial/disable.png)

## Add

Add the comment "//add" to add the content of other file inside this file. 

![](images/tutorial/add.png)

## Normal

Add the comment "//normal" to preserve the filename and save this module in file separate of module "main.extension". 

![](images/tutorial/normal.png)

## Normal/folders

Add the comment "//normal/folder name" to preserve the filename and save this module in other folder inside "www". 

![](images/tutorial/folders.png)

## snippets

Write the "snippet code" and press TAB to add a snippet 

Examples:

> \*                 
h                    
sc                          
loren                
grid                
get                
log                
 

Add a new snippet in project "Editor/snippets"