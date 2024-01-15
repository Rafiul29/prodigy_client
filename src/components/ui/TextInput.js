export default function TextInput({ title, ...attributes }) {
  return (
    <>
      <label className="block text-md   font-medium text-gray-700">{title}</label>
      <input
        className="mt-1 focus:deep-purple-500 focus:deep-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...attributes}
      />
    </>
  );
}
