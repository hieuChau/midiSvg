function test()
{
    if(!app.documents.length)
    {
        alert("You must have a document open.");
        return;
    }
    var docRef = app.activeDocument;
    var sel = docRef.selection;
    if(!sel.length)
    {
        alert("You must make a selection.");
        return;
    }
    function sortVertically(items)
    {
        var topMost,curY,delIndex,curItem,tempItems = [];
        for(var x=0,len=items.length;x<len;x++)
        {
            tempItems.push(items);
        }
        while(tempItems.length)
        {
            topMost = tempItems[0];
            curY = topMost.top;
            delIndex = 0;
            for(var x=1, len = tempItems.length;x<len;x++)
            {
                curItem = tempItems;
                if(curItem.top > curY)
                {
                    topMost = curItem;
                    curY = curItem.top;
                    delIndex = x;
                }
            }
            topMost.zOrder(ZOrderMethod.BRINGTOFRONT);
            tempItems.splice(delIndex,1);
        }
    }
    sortVertically(sel);
    
}
test();