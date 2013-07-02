Master Slave Select Plugin
=========

Example
=====

```
$('#projects').masterSlave(
    {
        urlBase: "path/to/json.php?project=",
        slave: "#tasks",
        valAttr: "id",
        textAtrr: "name"
    }   
);
```