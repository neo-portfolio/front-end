import React, {useContext} from "react";
import {ContextData, HomeContext} from "@components/home/context";
import {RightContainer} from "@components/home/rightContainer";
import {Query} from "@interfaces/neo4j";
import {Company} from "@interfaces/company";
import {CompanyDisplay} from "./companyDisplay";

export default () => {
    const {companies}: { companies: Query<Company>[] } = useContext<ContextData>(HomeContext);
    // Using react hooks https://reactjs.org/docs/hooks-reference.html#usecontext
    // With context https://reactjs.org/docs/context.html

    const companyArray: Company[] = companies.map((q: Query<Company>) => q.row).flat();

    return (
        <RightContainer>
            {companyArray && companyArray.map((company: Company) => <CompanyDisplay {...company} />)}
        </RightContainer>
    );
}