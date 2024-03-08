import prisma_client from "../prisma";

class ListCustomersServices{
    async execute(){
        const customers = await prisma_client.customer.findMany()

        return customers
    }
}


export {ListCustomersServices}