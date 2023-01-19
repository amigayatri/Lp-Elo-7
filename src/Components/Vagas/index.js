import { Wrapper, JobItem, JobLink, JobList, JobLocal, Title, SubTitle } from "./style";
import api from '../../Services/api';
import { useState, useEffect } from "react";

export default function Vagas() {
    let [jobs, setJobs] = useState([])


    useEffect (() => {
        api.get().then((response => {
            setJobs(response.data.vagas)
            console.log(response)
        } ))
    }, [])

    console.log(jobs, "oi")

    return (
        <Wrapper id="jobs">
            <Title>Vagas em aberto</Title>
            <SubTitle>Desenvolvimento</SubTitle>
            <JobList>
                {jobs.map((job, index) => 
                    job.ativa && <JobItem key={"job "+index}>
                        {console.log(job)}
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