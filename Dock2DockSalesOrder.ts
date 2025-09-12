export class Dock2dockSalesOrder {
  id: string|null;
  no: string|null;
  customerNo: string|null;
    customerExternalId: string;
    customerName: string;
    description: string|null;
    dispatchDate: string
    externalId: string|null;
    isCrossdock: boolean
    requestedDeliveryDate: string|null;

    constructor(id: string|null, no: string|null, customerNo: string|null, customerExternalId: string, customerName: string, description: string|null, dispatchDate: string, externalId: string|null, isCrossdock: boolean, requestedDeliveryDate: string|null) {
        this.id = id;
        this.no = no;
        this.customerNo = customerNo;
        this.customerExternalId = customerExternalId;
        this.customerName = customerName;
        this.description = description;
        this.dispatchDate = dispatchDate;
        this.externalId = externalId;
        this.isCrossdock = isCrossdock;
        this.requestedDeliveryDate = requestedDeliveryDate;
    }
}