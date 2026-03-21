import { defineStore } from "pinia";
import { supabase } from "@/services/supabase"
import type { Job, JobForm, JobUpdate, JobStatus } from "@/types/job";

export const useJobStore = defineStore('jobs', {
    state: (): {jobs: Job[], loading: boolean, error: string | null } => ({
        jobs: [],
        loading: false,
        error: null
    }),

    getters: {
        // Filter by status of the job
        jobsByStatus: (state) => (status: JobStatus): Job[] => state.jobs.filter(j => j.status === status)
    }, 

    actions: {
        // Fecth all jobs from the database
        async fetchJobs() {
            this.loading = true
            const { data, error } = await supabase.from('jobs').select('*').order('created_at', { ascending: false})

            if (error) this.error = error.message
            else this.jobs = data
            this.loading = false
        },

        //Add job in the database
        async addJob(job: JobForm) {
            const { data, error } = await supabase.from('jobs').insert(job).select().single()
            
            if(!error) this.jobs.unshift(data)
        }
    }
})