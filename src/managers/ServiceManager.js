import crypto from "crypto";

class ServiceManager {
    constructor() {
        this.services = [{ id: 1, name: "Extraccion de diente", precio: 4000, tiempo: 5000, descripcion: "extraccion simple de muelas de juicio" }];
    }
    getServices() {
        return this.services;
    }

    getServicesById(id) {
        return this.services.find(services => services.id === id);
    }

    createServices(name, precio, tiempo, descripcion) {
        const newService = {
            id: crypto.randomUUID(),
            name,
            precio,
            tiempo,
            descripcion

        }
        this.services.push(newService);
        return newService

    }

    updateServices(id, data) {
        let service = this.getServicesById(id);
        if (!service) return null
        service = {
            ...service,
            ...data
        }
        return service
    }

    deleteService(id) {
        const index = this.services.findIndex(service => service.id === id);
        if (index === -1) return null
        return this.services.splice(index, 1)
    }
}

const obj = new ServiceManager();
/*obj.createServices("Placa Dental", 15000, 200, "placa de relajacion para bruxismos");
//const update = obj.updateServices(1, { precio: 200 })
//obj.deleteService(1);
console.log(obj.getServices());
*/

