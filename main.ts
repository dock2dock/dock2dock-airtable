import { CreateCrossdockSalesOrder } from "./SalesOrderService";
import { Dock2dockSalesOrder } from "./Dock2DockSalesOrder";

const salesOrder = new Dock2dockSalesOrder(
    null, 
    "42471", 
    "CUST001", 
    "8071", 
    "New World Prestons", 
    null,
    "2025-09-12", 
    null, 
    true, 
    "2025-09-14");

CreateCrossdockSalesOrder(salesOrder);

export { }; 