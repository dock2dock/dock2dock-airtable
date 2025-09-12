import { Dock2dockSalesOrder } from "./Dock2DockSalesOrder";
import { Dock2dockApiError } from "./Dock2dockApiError";

// Airtable Automation Script
// let config = input.config();
// let record = input.config().record;

const apiBaseUrl = 'https://api.nonprod.dock2dock.io'; // Use the non-production API base URL for testing
const apiKey = '<x-api_key>'; // Replace with your actual API key

export async function CreateCrossdockSalesOrder(salesOrder: Dock2dockSalesOrder) {
    // API call configuration
    const response = await fetch(`${apiBaseUrl}/SalesOrder/Create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(salesOrder)
    });

    try {
        // Handle the response
        if (!response.ok) {
            var json = await response.json();
            throw new Dock2dockApiError(json.message, response.status, json.code);
        }
        console.log(`Sales Order ${salesOrder.no} created successfully`);
    } catch (error: unknown) {
        if (error instanceof Dock2dockApiError) {
            if (error.code === 'ALREADY_EXISTS') {
                console.log(`Sales Order ${salesOrder.no} already exists, updating instead.`);
                await UpdateCrossdockSalesOrder(salesOrder);
            } else {
                console.error(`API Error: ${error.message} (Status Code: ${error.statusCode}, Code: ${error.code})`);
            }
            return;
        }

        console.error('Error parsing JSON:', error);  
    }
}

async function UpdateCrossdockSalesOrder(salesOrder: Dock2dockSalesOrder) {
    // API call configuration
    const response = await fetch(`${apiBaseUrl}/SalesOrder/Update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(salesOrder)
    });

    try {
        // Handle the response
        if (!response.ok) {
            var json = await response.json();
            throw new Dock2dockApiError(json.message, response.status, json.code);
        }
        console.log(`Sales Order ${salesOrder.no} updated successfully`);
    }
    catch (error: unknown) {
        if (error instanceof Dock2dockApiError) {
            console.error(`API Error: ${error.message} (Status Code: ${error.statusCode}, Code: ${error.code})`);
            return;
        }
        console.error('Error parsing JSON:', error);
    }
}
