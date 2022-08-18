var columns;
var rows;

function createTable(tableName){
    columns = 16;
    createColumns(tableName);
    rows = 1;
    populateRows(tableName);
}

function createColumns(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    var cell = null;
    for(i = 0; i < columns; i++) {
        cell = document.createElement("th");
        switch(i) {
            case 0:
                cell.append("Select Algorithm"); break;
            case 1:
                if(tableName == "ExpensesTable")
                    cell.append("Budget Item");
                else
                    cell.append("Income Source");
                break;
            case 14:
                cell.append("Annual Summation"); break;
            case 15:
                cell.append("Monthly Average"); break;
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
}

function populateRows(tableName){
    var table = document.getElementById(tableName);
    var row = document.createElement("tr");
    var cell = null;
    var menu = null;
    var option = null;
    for(i = 0; i < columns; i++){
        switch(i) {
            case 0:
                cell = document.createElement("th");
                menu = document.createElement("select");
                option = document.createElement("option");
                
                option.append("--Choose--");
                menu.appendChild(option);
                cell.appendChild(menu);
                
                rows++;
                break;
            case 1:
                cell = document.createElement("th");
                menu = document.createElement("select");
                option = document.createElement("option");

                option.append("--Choose--");
                menu.appendChild(option);
                cell.appendChild(menu);

                break;
            default:
                cell = document.createElement("th");
                cell.append("$0.00");
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}