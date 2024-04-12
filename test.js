const axios = require('axios');

const apiUrl = 'http://localhost:3000/masks';

// Helper function to make POST request to create a new mask
async function createMask() {
    try {
        const response = await axios.post(apiUrl, {
            name: 'Test Mask',
            description: 'This is a test mask',
            mask_json: '{"type":"test"}'
        });
        console.log('Create Mask: OK');
        return response.data; // returns created mask object
    } catch (error) {
        console.error('Create Mask: Failed');
    }
}

// Helper function to make GET request to retrieve a mask
async function getMask(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log('Get Mask: OK');
        return response.data; // returns mask object
    } catch (error) {
        console.error('Get Mask: Failed');
    }
}

// Helper function to make PUT request to update a mask
async function updateMask(id) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, {
            name: 'Updated Test Mask',
            description: 'Updated description',
            mask_json: '{"type":"updated"}'
        });
        console.log('Update Mask: OK');
        return response.data; // returns updated mask object
    } catch (error) {
        console.error('Update Mask: Failed');
    }
}

// Helper function to make DELETE request to delete a mask
async function deleteMask(id) {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        console.log('Delete Mask: OK');
    } catch (error) {
        console.error('Delete Mask: Failed');
    }
}

// Test sequence
async function testCRUDOperations() {
    console.log('Starting CRUD operations test...');

    const createdMask = await createMask(); // Create a new mask
    if (!createdMask) {
        console.error('Stopping test due to failure in creation.');
        return;
    }

    await getMask(createdMask.id); // Retrieve the created mask
    await updateMask(createdMask.id); // Update the mask
    await deleteMask(createdMask.id); // Delete the mask
}

testCRUDOperations();
