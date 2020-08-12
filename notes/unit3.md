# Unit 3- XML and AJAX

The purpose of this unit is to learn XML and AJAX

## What is XML
  XML is a format of data - it is a way to describe, store and transfer data
  If an XML parser can successfully process an XML file, that xml file is "well-formed"
  A Document Type Definition (DTD) can be used to validate an XML file to ensure that it meets the defined structure
  Extensible StyleSheet Language (XSL) can be used to present the XML information in a more useful way
  

# XML Basics
  * XML documents can optionally start with a line declaring that it is an XML file
  * XML documents are made up of elements (with names) which usually have a start and end tag
    * eg. &lt;element&gt; Element Content &lt;/element&gt;
  Elements can be nested within one another: eg. &lt;element&gt;  &lt;nested&gt; Nested Element Data  &lt;/nested&gt;  &lt;/element&gt;
  There is one element, the root element, which encompasses all the other elements on the page
  Elements may have attributes which define more information about the element &lt;element attribute="more info" &gt; Element Content &lt;/element&gt;
  XML namespaces help to reduce naming collisions

# AJAX
  AJAX stands for Asynchronous JavaScript and XML
  Allows for partial page updates (as opposed to reloading the entire web page), making web applications more response, and feel more like desktop applications
  This leads to the creation of Rich Internet Applications (RIAs)
  In an AJAX application:
    The client sends an XmlHttpRequest and awaits for the response
    Since the request is asynchronous, the user can still interact with the client application while it is waiting
    When the response is received, the client can update part of the web page to show the response information
  
```javascript 

let xhr;
createAndSendRequest();

function createAndSendRequest() {
  // create request
  xhr = new XMLHttpRequest();

  // register event handler
  xhr.addEventListener("readystatechange", handleStateChange, false)

  // prepare request
  xhr.open("GET", url, true);

  // send request
  xhr.send(null);
}

function handleStateChange() {
  // readyState = 4 means that the request is complete
  // status = 200 means the request was successfull
  if (xhr.readyState == 4 && xhr.status == 200) {
    let response = xhr.responseText;
    console.log("Response:", response);
    document.getElementById("responseText").innerHTML = response;
  }
}

```
