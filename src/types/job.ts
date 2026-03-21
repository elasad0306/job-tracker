export type JobType = 'Stage' | 'Alternance' | 'CDI' | 'CDD'

export type JobStatus = 'Envoyéé' | 'Vue' | 'Entretien' | 'Offre' | 'Refus'

export interface Job {
    id: string
    company: string
    role: string
    type: JobType
    status: JobStatus
    city?: string
    url?: string
    notes?: string
    applied_at: string
    created_at: string
}

export type JobForm = Omit<Job, 'id' | 'created_at'>

export type JobUpdate = Partial<JobForm>