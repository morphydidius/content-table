<template>
	<ct-table
		:columns="hours"
		:rows-count="rowsCount"
	>
		<template
			v-for="slotName in slotNames"
			:key="slotName"
			#[slotName]="{ item }"
		>
			<input
				class="ct__input"
				type="text"
				@input="e => editField(e, e.target.value, item)"
			>
		</template>
	</ct-table>
</template>

<script>
import {
	generateHours,
	getMatrixCollByCoords,
	getSlotNamesFromCoords,
	getValidatedValue,
} from '@/utils/table';

import CtTable from '@/components/Table';

export default {
	name: 'CtTableOne',
	components: {
		CtTable,
	},
	data() {
		return {
			hours: {
				title: 'Часы',
				items: generateHours(),
			},
			rowsCount: 60,
		};
	},
	computed: {
		slotNames() {
			const slotsCoords = getMatrixCollByCoords(this.rowsCount, this.hours.items.length);

			return getSlotNamesFromCoords(slotsCoords);
		},
	},
	methods: {
		editField(event, value, { row, column }) {
			const validatedValue = getValidatedValue(value);

			event.target.value = validatedValue;

			this.$store.dispatch('pageOne/saveFields', {
				hours: column,
				row,
				value: validatedValue,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.ct {
	&__input {
		width: 60px;
		border: none;
	}
}
</style>
