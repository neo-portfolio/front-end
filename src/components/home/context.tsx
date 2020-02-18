import {Context, createContext} from "react";
import {Company} from "@interfaces/company";
import {Query, Weight} from "@interfaces/neo4j";

interface ContextData {
	companies: Query<Company>,
	weights: Weight[]
	setCompanies: (newCompanies: Query<Company>) => void;
	setWeights: (newWeights: Weight[]) => void;
}

export const HomeContext: Context<ContextData> = createContext<ContextData>(null);