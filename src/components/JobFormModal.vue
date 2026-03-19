<script setup lang="ts">
import { X } from 'lucide-vue-next'

const emit = defineEmits(['close'])


</script>

<template>
  <dialog class="modal modal-bottom sm:modal-middle" open>
    <div class="modal-box">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">Nouvelle Candidature</h3>
        <button class="btn hover:btn-ghost btn-sm btn-circle" @click="emit('close')">
          <X :size="16" />
        </button>
      </div>

      <!-- Formulaire  -->
      <div class="flex flex-col gap-3">
        <div class="grid grid-cols-2 gap-3">
          <div class="form-control">
            <label class="label"><span class="label-text">Entreprise * </span></label>
            <input type="text" placeholder="ex: Capgemini" class="input input-bordered input-sm" />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text">Poste * </span></label>
            <input
              type="text"
              placeholder="ex: Développeur Fullstack"
              class="input input-bordered input-sm"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="form-control">
            <label class="label"><span class="label-text">Type de contract* </span></label>
            <select class="select select-bordered select-sm">
              <option>Stage</option>
              <option>Alternance</option>
              <option>CDD</option>
              <option>CDI</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text">Statut* </span></label>
            <select class="select select-bordered select-sm">
              <option>Entretien</option>
              <option>Envoyée</option>
              <option>Offre</option>
              <option>Vue</option>
              <option>Refus</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="form-control">
            <label class="label"><span class="label-text">Ville * </span></label>
            <input type="text" placeholder="ex: Capgemini" class="input input-bordered input-sm" />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text">Date de candidature * </span></label>
            <input
              type="date"
              placeholder="ex: Développeur Fullstack"
              class="input input-bordered input-sm"
            />
          </div>
        </div>
        <div class="form-control flex flex-col">
          <label class="label"><span class="label-text">Lien de l'offre</span></label>
          <input
            type="url"
            placeholder="https://..."
            class="input input-bordered input-sm w-full"
          />
        </div>
        <div class="form-control flex flex-col">
          <label class="label"><span class="label-text">Notes</span></label>
          <textarea
            class="textarea textarea-bordered textarea-sm w-full"
            placeholder="Contact RH, impressions…"
          />
        </div>
      </div>

      <!-- Bouttons -->
      <div class="modal-action">
        <button class="btn btn-ghost rounded-xl" @click="emit('close')">Annuler</button>
        <button class="btn bg-emerald-300 rounded-xl hover:bg-[#4ade80] text-gray-950">
          Enregistrer
        </button>
      </div>
      <div class="modal-backdrop" @click="emit('close')" />
    </div>
  </dialog>
</template>
