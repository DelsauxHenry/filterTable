var parsedTables = []

window.addEventListener("load", (event) => {

    const tables = document.querySelectorAll('.tableFilter');

    tables.forEach((table) => {
        const tableData = {
            id: table.id,
            headers: {},
            rows: [],
        };

        // parse table headers
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            tableData.headers[index] = header.textContent.trim();
        });

        // parse table rows
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row) => {
            const rowData = {}

            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                const header = tableData.headers[index]
                rowData[header] = {
                    value: cell.textContent.trim(),
                    raw: cell.outerHTML
                }
            });
            tableData.rows.push(rowData);
        });

        parsedTables.push(tableData);
    });

    console.log(parsedTables)


}, { once: true })

window.addEventListener("load", (event) => {
    $('.filterable').click(function () { filterTable(this) })
})

window.addEventListener("load", (event) => {
    $('.filterable').each(async function (index) {
        const defaultFilter = $(this).data('defaultfilter')
        if (defaultFilter) {
            if (defaultFilter == 'DESC') {
                $(this).data('filterdirection', 'ASC')
            } else if (defaultFilter == 'ASC') {
                $(this).data('filterdirection', 'DESC')
            }
            filterTable(this)
        }
    })
})

function filterTable(element) {
    var order = $(element).data('filterdirection')
    var columnName = $(element).text()
    var tableId = $(element).closest('table').attr('id')
    const exclusions = ['£']
    var tableData
    for (var i = 0; i < parsedTables.length; i++) {
        if (parsedTables[i].id == tableId) tableData = parsedTables[i]
    }
    $(`#${tableId} .filterIcon`).remove()
    if (!order) {
        order = 'ASC'
        $(element).data('filterdirection', 'ASC')
        $(element).append('<i class="bi bi-caret-down-fill filterIcon"></i>')
    } else if (order == 'DESC') {
        order = 'ASC'
        $(element).data('filterdirection', 'ASC')
        $(element).append('<i class="bi bi-caret-down-fill filterIcon"></i>')
    } else if (order == 'ASC') {
        order = 'DESC'
        $(element).data('filterdirection', 'DESC')
        $(element).append('<i class="bi bi-caret-up-fill filterIcon"></i>')
    }
    var orderedData = [...tableData.rows]

    orderedData.sort(function (a, b) {
        let aValue, bValue;
        if (columnName in a) {
            aValue = a[columnName].value;
        }
        if (columnName in b) {
            bValue = b[columnName].value;
        }

        if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
            console.log('ordering as number')
            if (order === 'ASC') {
                return parseFloat(aValue) - parseFloat(bValue);
            } else if (order === 'DESC') {
                return parseFloat(bValue) - parseFloat(aValue);
            }
        } else if (typeof aValue === 'string' && typeof bValue === 'string') {
            console.log('ordering as string')
            if (order === 'ASC') {
                return aValue.localeCompare(bValue);
            } else if (order === 'DESC') {
                return bValue.localeCompare(aValue);
            }
        }
        // If column name is not present in either object, leave the order unchanged
        return 0;
    });

    console.log(orderedData)

    $(`#${tableId} > tbody`).empty()
    for (var i = 0; i < orderedData.length; i++) {
        const row = orderedData[i]
        var HTML = '<tr>'

        for (const [key, value] of Object.entries(tableData.headers)) {
            HTML += row[value].raw
        }
        HTML += '</tr>'

        $(`#${tableId} > tbody`).append(HTML)
    }
}
