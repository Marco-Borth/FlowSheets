var columns;
var rows;

function createTable(tableName){
    columns = 17;
    if(tableName == "Expenses Table")
        rows = 0;
    createColumns(tableName);
    populateRows(tableName);
}

function createColumns(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    rows++;
    row.append(tableName);
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
    document.getElementById("cellsCounter").innerHTML = "Columns: " + columns + ", Rows: " + rows;
}

function populateRows(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    rows++;
    var cell = null;
    for(i = 0; i < columns; i++){
        switch(i) {
            case 0:
                cell = document.createElement("th");
                addSelector(cell);
                break;
            case 1:
                cell = document.createElement("th");
                addInputBox(cell);
                break;
            case 16:
                cell = document.createElement("th");
                addEditOptions(cell);
                break;
            default:
                cell = document.createElement("th");
                cell.append("$0.00");
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
    document.getElementById("cellsCounter").innerHTML = "Columns: " + columns + ", Rows: " + rows;
}

function addSelector(cell) {
    var menu = document.createElement("select");
    var option = document.createElement("option"); 
    option.append("---Choose---");
    menu.appendChild(option);
    cell.appendChild(menu);
}

function addInputBox(cell) {
    var inputBox = document.createElement("input");
    cell.appendChild(inputBox);
}

function addEditOptions(cell) {
    var button = document.createElement("button");
    button.append("Delete");
    cell.appendChild(button);
}