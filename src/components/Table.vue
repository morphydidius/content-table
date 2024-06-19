<template>
	<div class="ct">
		<div class="ct__title">
			{{ columns.title }}
		</div>

		<div class="ct__table">
			<table border="1" cellspacing="0">
				<thead>
					<tr>
						<th></th>

						<th
							v-for="item in columns.items"
							:key="item"
							class=""
						>{{ item }}</th>
					</tr>
				</thead>

				<tbody>
					<tr
						v-for="(row, x) in rowsCount"
						:key="row"
						class=""
					>
						<td>{{ x + 1 }}</td>

						<td
							v-for="(item, y) in columns.items"
							:key="item"
							class=""
						>
							<slot
								:name="getSlotName(x,y)"
								:item="{ row: x + 1, column: y + 1 }"
							></slot>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CtTable',
	props: {
		columns: {
			type: Object,
			required: true,
		},
		rowsCount: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {};
	},
	methods: {
		getSlotName(x, y) {
			return `cell${x + 1}-${y + 1}`;
		},
	},
};
</script>

<style lang="scss" scoped>
$tableWidth: 1000px;
$tableHeight: 500px;

.ct {
	thead {
		position: sticky;
		top: 0;
		background-color: #bdbebd;
	}

	tbody {
		td:first-of-type {
			position: sticky;
			left: 0;
			text-align: center;
			background-color: #cad7bd;
		}
	}

	&__title {
		text-align: center;
		max-width: $tableWidth;
		margin-bottom: 10px;
	}

	&__table {
		max-width: $tableWidth;
		max-height: $tableHeight;
		overflow: auto;
	}
}
</style>