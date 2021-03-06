"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concat {
    constructor(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
    assemble(context) {
        const frag1 = this.operand1.assemble(context);
        const frag2 = this.operand2.assemble(context);
        const frag = frag1.__or__(frag2);
        for (const state of frag1.accepts) {
            frag.connect(state, '', frag2.start);
        }
        frag.start = frag1.start;
        frag.accepts = frag2.accepts;
        return frag;
    }
}
exports.default = Concat;
