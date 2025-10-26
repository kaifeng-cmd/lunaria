<script setup lang="ts">
/**
 * Props:
 * - columns: Array of column configurations
 * - rows: Array of row data
 * - highlightColumn: Key of the column to highlight (optional)
 */

interface Column {
  key: string; // Unique identifier for the column
  label: string; // Display name of the column
  align?: 'left' | 'center' | 'right'; // Text alignment
}

interface Row {
  label: string; // Row title
  // e.g. { us: '15 minutes', others: '2-3 weeks' }
  values: Record<string, string | boolean>; // Values for each column (key corresponds to Column.key)
}

interface Props {
  columns: Column[];
  rows: Row[];
  // HTML Template kebab-case 'highlight-column' same as camelCase 'highlightColumn' in JS
  highlightColumn?: string;
}

const props = withDefaults(defineProps<Props>(), {
  highlightColumn: undefined,
});

// Check if a column should be highlighted
const isHighlighted = (columnKey: string) => {
  return props.highlightColumn === columnKey;
};

// Format cell value (convert boolean to checkmark/cross)
const formatValue = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? '✓' : '✗';
  }
  return value;
};

// Get CSS classes for a cell
const getCellClass = (columnKey: string) => {
  const classes = ['px-6 py-4'];

  // Text alignment
  const column = props.columns.find((col) => col.key === columnKey);
  if (column?.align === 'left') {
    classes.push('text-left');
  } else if (column?.align === 'right') {
    classes.push('text-right');
  } else {
    classes.push('text-center');
  }

  // Highlight column
  if (isHighlighted(columnKey)) {
    classes.push('text-green-600 font-semibold');
  } else {
    classes.push('text-gray-500');
  }

  return classes.join(' ');
};
</script>

<template>
  <div class="bg-red-50 rounded-2xl shadow-xl overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
        <!-- Table Header -->
        <thead class="bg-gradient-to-r from-[#f09898] to-pink-500 text-white">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4"
              :class="{
                'text-left': column.align === 'left' || column.key === 'feature',
                'text-center':
                  column.align === 'center' || (!column.align && column.key !== 'feature'),
                'text-right': column.align === 'right',
              }"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="divide-y divide-pink-200">
          <tr
            v-for="(row, index) in rows"
            :key="row.label"
            :class="index % 2 === 1 && 'bg-pink-50'"
          >
            <!-- First column: Row label -->
            <td class="px-6 py-4 font-medium text-pink-700">
              {{ row.label }}
            </td>

            <!-- Other columns: Data cell -->
            <td
              v-for="column in columns.slice(1)"
              :key="column.key"
              :class="getCellClass(column.key)"
            >
              {{ formatValue(row.values[column.key]) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
