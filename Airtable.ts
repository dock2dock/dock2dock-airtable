import { Dock2dockSalesOrder } from "./Dock2DockSalesOrder";
import { CreateCrossdockSalesOrder } from "./SalesOrderService";

// Get the table
let table = base.getTable("YourTableName");

// Load records from a specific view
let query = await table.selectRecordsAsync({
    fields: ["SomeField"], // only pull what you need
});
let view = table.getView("YourViewName");
let result = await view.selectRecordsAsync();

// Loop through records in the view
for (let record of result.records) {
    var salesOrder = new Dock2dockSalesOrder(
        record.getCellValue("id") || null, //null or auto-generated ID
        record.getCellValue("no") || null, //SO12345
        record.getCellValue("customerNo") || null, //CUST001
        record.getCellValue("customerExternalId"), //8071 (FSSI Store ID)
        record.getCellValue("customerName"), //New World Prestons
        record.getCellValue("description") || null, // 'Order Description'
        record.getCellValue("dispatchDate"), // '2025-09-14'
        record.getCellValue("externalId") || null, // '6017818605'
        true, //isCrossdock
        record.getCellValue("requestedDeliveryDate") || null); // '2025-09-14'

    await CreateCrossdockSalesOrder(salesOrder);
}