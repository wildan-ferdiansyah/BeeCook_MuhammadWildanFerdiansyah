
export const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category?search=`, {
    method: "GET",
  })

  if(!res.ok) throw new Error("Gagal mengambil data kategori")

  const data = await res.json();

  return data.data.categories;
}