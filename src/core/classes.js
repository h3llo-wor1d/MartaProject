export class Train {
    constructor(
        ...data
    ) {
        this.internalID = data.internalId;
        this.direction = data.direction;
        this.line = data.line;
        this.station = data.station;
        this.destination = data.destination;
        this.nextArr = data.nextArr;
    }
}