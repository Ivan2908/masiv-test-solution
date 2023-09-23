import { useRandomFetch } from '../composables/useRandomFetchComic';
import axios, { AxiosStatic } from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<AxiosStatic>;

describe('useRandomFetch', () => {
  it('fetchRandomComic should update randomComic with data', async () => {
    const { randomComic, fetchRandomComic, isLoading, showNotFound } =
      useRandomFetch();

    const responseData = {
      title: 'Comic Title',
      num: 42,
      img: 'comic-image.jpg',
      alt: 'Comic Alt Text'
    };

    mockedAxios.get.mockResolvedValueOnce({ data: { num: 42 } });
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });

    await fetchRandomComic();

    expect(isLoading.value).toBe(false);
    expect(showNotFound.value).toBe(false);
    expect(randomComic.value.title).toBe('Comic Title');
    expect(randomComic.value.num).toBe(42);
    expect(randomComic.value.img).toBe('comic-image.jpg');
    expect(randomComic.value.alt).toBe('Comic Alt Text');
  });

  it('fetchRandomComic should handle error', async () => {
    const { fetchRandomComic, isLoading, showNotFound } = useRandomFetch();

    mockedAxios.get.mockRejectedValueOnce(new Error('Request failed'));

    await fetchRandomComic();

    expect(isLoading.value).toBe(false);
    expect(showNotFound.value).toBe(true);
  });
});
