Airtable automation that makes an API call with data from your view. Here's how to set it up using Airtable's built-in automations:

## 1. Create the Automation in Airtable:

- Click `Automations` in your base
- Select `Create automation`
- Choose `When button clicked` as your trigger

## 2. Add an Action:

- Choose `Run script` action
- Use this script template:

[script](Airtable.ts)

Note: Please read the [documentation](https://docs.dock2dock.io/api/v1/create-sales-order) for more information about the Dock2dock API. 

## 3. Key Points:

- Replace `<x-api-key>` with your [actual API key](./SalesOrderService.ts)
- Replace `record.getCellValue("XX")` with your correct airtable field.
- You may have to merge `Dock2dockSalesOrder.ts`, `Dock2dockApiError.ts` and `SalesOrderService.ts` files content if Airtable doesn't allow imports.
 
## 4. Testing:

- Use the `Test` button in the automation builder to verify it works
- Check the automation runs log to debug any issues

Note: Make sure your `API key` is kept secure. Consider using Airtable's environment variables for sensitive information.