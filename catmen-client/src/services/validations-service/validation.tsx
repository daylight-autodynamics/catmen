import {iDataGridItem} from "../../_catman-data-types";
import {Worker} from "worker_threads";

interface iValidation {
    dataSet : iDataGridItem[][];
    validationRules : validationRule[];
}

type validationRule = {
    columnName : string;
    validation : Function
}

export class ValidationService implements iValidation{
    constructor(dataSet : iDataGridItem[][], validationRules : validationRule[]) {
        this.dataSet = dataSet;
        this.validationRules = validationRules
    }
    dataSet : iDataGridItem[][];
    validationRules : validationRule[];

    initializeValidations(){
        setTimeout(
            ()=>this.doValidations(),
            10000
        )
    }

    validationChecks(dataGridItem : iDataGridItem){

    }

    doValidations(){
        for(let i=0; i < this.dataSet.length; i++){
            for(let j=0; j < this.dataSet[i].length; j++){
              //  console.log(this.dataSet[i][j].columnName);
                this.validationChecks(this.dataSet[i][j]);
            }
        }
    }
}