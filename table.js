var columns;
var rows;

function createTable(tableName){
    columns = 17;
    if(tableName == "Expenses Table")
        rows = 0;
    createColumns(tableName);
    populateRow(tableName);
}

function createColumns(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    rows++;
    if(tableName == "Expenses Table")
        row.append("Expenses");
    else
        row.append("Income");
    table.appendChild(row);
    var row = document.createElement("tr");
    rows++;
    var cell = null;
    for(i = 0; i < columns; i++) {
        cell = document.createElement("th");
        switch(i) {
            case 0:
                cell.append("Select"); break;
            case 1:
                if(tableName == "Expenses Table")
                    cell.append("Item");
                else
                    cell.append("Source");
                break;
            case 14:
                cell.append("Annual Summation"); break;
            case 15:
                cell.append("Monthly Average"); break;
            case 16:
                cell.append("Edit:"); break;
            default:
                const d = new Date();
                d.setDate(1);
                d.setMonth(i - 2);
                d.toLocaleString("en-US", { month: "long", year:"numeric" });
                cell.append(d.toLocaleString("en-US", { month: "long", year:"numeric" }));
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
    updateDimensions();
}

function populateRow(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    rows++;
    row.id = "r" + rows;
    var cell = null;
    for(i = 0; i < columns; i++){
        if(i == 0 || i == 1 || i == 16)
            cell = document.createElement("th");
        else
            cell = document.createElement("td");

        cell.id = "r" + rows + ", c" + i; 
        switch(i) {
            case 0:
                addSelector(cell);
                break;
            case 1:
                addSelector(cell);
                break;
            case 16:
                addEditOptions(cell, row);
                break;
            default:
                cell.append("$0.00");
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
    updateDimensions();
}

function addSelector(cell) {
    var menu = document.createElement("select");
    var option = document.createElement("option");
    option.append("---Choose---");
    menu.appendChild(option);
    cell.appendChild(menu);

    if(cell.id.substring(4, 6) == "c1") {
        option = document.createElement("option");
        option.append("Custom");
        menu.appendChild(option);
        cell.appendChild(menu);
    }
}

function addInputBox(cell) {
    var inputBox = document.createElement("input");
    cell.appendChild(inputBox);
}

function addEditOptions(cell, row) {
    var button = null;
    button = document.createElement("button");
    button.id = "button " + cell.id;

    
    button.onclick = function() {  
        deleteRow(row.id); 
    }; 
    button.append("Delete");
    cell.appendChild(button);
}

function deleteRow(rowID) {
    if(rows > 6) {
        var row = document.getElementById(rowID);
        row.remove();
        rows--;
        updateDimensions();
    }
}

function updateDimensions() {
    document.getElementById("cellsCounter").innerHTML = "Columns: " + columns + ", Rows: " + rows;
}