import { Wrapper, JobItem, JobLink, JobList, JobLocal } from "./style";
import api from '../../Services/api';
import { useState, useEffect } from "react";
import { SectionTitle, SubTitle } from "../../globalComponents";

export default function Jobs() {
    let [jobs, setJobs] = useState([])


    useEffect (() => {
        api.get().then((response => {
            setJobs(response.data.vagas)
        } ))
    }, [])

    return (
        <Wrapper id="jobs">
            <SectionTitle>Vagas em aberto</SectionTitle>
            <SubTitle>Desenvolvimento</SubTitle>
            <JobList>
                {jobs.map((job, index) => 
                    job.ativa && <JobItem key={"job "+index}>
                        <JobLink href={job.link}>{job.cargo}</JobLink>
                        {job.localizacao? 
                            <JobLocal>{job.localizacao.bairro} - {job.localizacao.cidade}, {job.localizacao.pais}</JobLocal>
                        :
                        <JobLocal>Remoto</JobLocal>}
                    </JobItem>
                )}
            </JobList>
        </Wrapper>
    );
}