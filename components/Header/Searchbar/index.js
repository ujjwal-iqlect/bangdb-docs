import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useGlobalContext } from '../../../Context';

export default function HeaderSearchbar() {
  const { query, setQuery } = useGlobalContext();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!query.startsWith(' ')) {
      router.push(`/search?q=${query}`);
      setQuery('');
    }
  };
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
          <span className="text-gray-500 sm:text-sm">
            <MagnifyingGlassIcon
              className="h-4 w-4 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
          </span>
        </div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-8 pr-12 sm:text-sm"
            placeholder="Search documentation"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </form>
      </div>
    </div>
  );
}
