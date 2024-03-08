import { FastifyRequest, FastifyReply } from "fastify";
import {ListCustomersServices} from "../services/ListCustomersServices"

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listcustomerservice = new ListCustomersServices

        const custumers = await listcustomerservice.execute()

        reply.send(custumers)
    }
}

export {ListCustomersController}