const LightElementNode = require('./lightElementNode').LightElementNode;

class Team extends LightElementNode {
    constructor() {
        super('team');
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        this.appendChild(member);
    }

    removeMember(member) {
        const index = this.members.indexOf(member);
        if (index > -1) {
            this.members.splice(index, 1);
            this.children.splice(this.children.indexOf(member), 1);
        }
    }

    getMembers() {
        return this.members;
    }
}

module.exports = Team;
