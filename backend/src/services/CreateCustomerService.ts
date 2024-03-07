import prisma_client from "../prisma";

class CreateCustomerService{
    async execute(){
        console.log('rota chamada')

        return {ok: true}
    }

}

export  {CreateCustomerService}