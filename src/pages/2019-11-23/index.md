---
path: '/FPDF'
title: 'Creating custom PDF Documents in PHP'
published: false
date: '2019-11-23'
---


Today, PDF has become the de-facto document format.  It’s universal, printable, and looks the same on any reader program available.  If you're working with PHP, there is a free class called FPDF that allows the generation of custom PDF files.  It’s easy to use and does not require access to any other external libraries. 

###Set Up

<div style="margin: 2rem auto;">
    <img id="figure_01" src="./figure_01.jpg" style="height:280px; margin-bottom: 2rem;"/>
</div>

Download the source files, and install them into your project directory.  The files are compressed, so be sure to extract them into a folder named “FPDF”.            
Once installed, the class can be accessed by using a require statement.  It’s a good idea to create a separate PHP script file to build the PDF, so we’ll put the require statement at the beginning of that file.  Now we can create a new instance of the FPDF class using 'extends'.  From here, we can add our first blank page. 

`gist:ronniergz/4e3eb573da605987454fffa8f133d3bd#FPDF-Tutorial-01.php`

###Building the Document

Now we can start adding content to our page.  The content is arranged and positioned in "cells", not unlike a "div" would be in HTML.  Let's say we wanted to add some text and a logo image.  To display text, we use the Cell() function to size, position and fill a section of the page with content.

<div style="margin: 2rem auto;">
    <img id="figure_03" src="/figure_02.jpg" />
</div>

Cell() accepts multiple parameters. The width and height of the cell defaults to millimeters unless otherwise specified.  A string of text can be placed inside of the cell and we can specify its alignment.  There is an option for a border around the cell.  In this case, 'B' denotes bottom only.  We can also specify the position of the next cell.  A '1' indicates it will be placed at the beginning of the next line. 

Before we can insert the cell, though, we have to tell the page where it will be.  We can do that by using SetXY() to set the X and Y coordinates to insert the cell.  Since the default page size is A4 (210mm wide and 297mm) high and we know the cell we want to insert is 55mm wide, an X coordinate of 77mm will center the cell on the page and a Y coordinate of 100mm will bring the cell roughly 1/3 of the way down the page.  We also need to set the font style since we will be inserting text into the cell.  Font styles and colors must be set before any insertion.

`gist:ronniergz/c43446292c1617110844fbd74440e2cc#FPDF-Tutorial-02.php`

To insert an image from our directory, we use Image() which accepts file path, coordinates and size as parameters.  The coordinates are now taken from the current position that we specified during the Cell() function call which would be the beginning of the line immediately below the text we inserted.  We'll set the image width at 40mm and center it on the page using an 85mm X coordinate.  To provide some spacing between the text and image, we can use Ln() to insert a line break.  It accepts a line height as a parameter.

###Saving the File

Now that our file is complete we can save it to the directory using the Output() function.  We use 'F' for the local     directory option then specify the path and filename. That's it!  
There are many more functions available to create any design you can think of.   The documentation can be found <a href="http://www.fpdf.org">here.</a>     
<div style="margin: 2rem auto;">       
    <img id="figure_05" src="/figure_05.jpg" style="height:280px; padding:10px;" />
</div>

`gist:ronniergz/a9fb7627181db1243561f6833036a061#FPDF-Tutorial-03.php`
