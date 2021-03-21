import NewPlaceForm from '@/components/new-place-form.js'
import MyPage from '@/components/my-page.js'

export default function NewEntryPage() {
  return (
    <>
      <MyPage pageTitle='Dodaj'>

        <div className="flex flex-col text-center items-center my-8">
          <h1 className="text-6xl font-bold">
            Pomóż
            <div className="text-blue-600">
              MamyOtwarte!
            </div>
          </h1>
          <p className="pt-8 text-2xl">
            Wypełnij poniższy formularz i dodaj swoją działalność do naszej bazy!{' '}
          </p>
        </div>

        <NewPlaceForm />
      </MyPage>
    </>
  )
}