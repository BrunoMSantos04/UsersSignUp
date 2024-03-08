import prisma_client from "../prisma"

interface DeleteCustumerProps{
    id: string
}

class DeleteCustumerService{
    async execute({id}: DeleteCustumerProps){
        if (!id) {
            throw new Error("Solicitação Inválida")
        }

        const findCustomer = await prisma_client.customer.findFirst({
            where:{
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não cadastrado")
        }

        await prisma_client.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export {DeleteCustumerService}