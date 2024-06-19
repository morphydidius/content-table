<template>
	<ct-table
		:columns="hours"
		:rows-count="rowsCount"
	>
		<template
			v-for="slotName in slotNames"
			:key="slotName"
			#[slotName]
		>
			<img
				class="cb__icon"
				src="@/assets/images/table_two/icon.png"
				alt="logo"
			>
		</template>
	</ct-table>
</template>

<script>
import {
	generateDaysInMonth,
	getMatrixCollByCoords,
	getSlotNamesFromCoords,
} from '@/utils/table';

import CtTable from '@/components/Table';

export default {
	name: 'CtTableTwo',
	components: {
		CtTable,
	},
	data() {
		return {
			hours: {
				title: 'Дни',
				items: generateDaysInMonth(),
			},
			rowsCount: 24,
		};
	},
	computed: {
		slotNames() {
			const slotsCoords = getMatrixCollByCoords(this.rowsCount, this.hours.items.length);

			return getSlotNamesFromCoords(slotsCoords);
		},
	},
	methods: {
		editField(value, { row, column }) {
			this.$store.commit('pageOne/updateFields', {
				hours: column,
				row,
				value,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.cb {
	&__icon {
		width: 25px;
		height: 25px;
		margin: 10px;
	}
}
</style>
