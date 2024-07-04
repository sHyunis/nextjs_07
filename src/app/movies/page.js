// fetch 할 파일
// src/app/movies/page.js
// localhost:3000/movies

"use client"
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

const Movies = () => {
    const [ movies, setMovies ] = useState([]);
    const url = `https://yts.mx/api/v2/list_movies.json`;

    let pagePerCount = 5; // 한 화면에 5개씩 나타냄
    let [ currentPage, setCurrentPage ] = useState(1); // 현재 보여질 목록의 개수
    let lastOfIndex = currentPage * pagePerCount; // 처음 보여줄 번호화 마지막에 보여줄 번호
    let startOfIndex = lastOfIndex - pagePerCount; // 시작 페이지 번호

    let pageMovies = movies.slice( startOfIndex, lastOfIndex ); // 시작부터 끝까지 영화 개수가 잘라진다. // 배열 형태이다.
    // 화면에 표시될 영화 잘라내기

    useEffect(() => {
        // const loadMovies = async () => {
        //     const res = await fetch( url );
        //     const data = await res.json(); // 받은 전체 데이터
        //     setMovies( data.data.movies ); // 속 데이터
        // }

        // loadMovies(); // 호출을 해줘야 한다.

        fetch(url)
        .then(res => res.json())
        .then(res => setMovies(res.data.movies)) // 초기화 완료
    }, [])
    
  return (
    <div>
        <h1> 영화 정보 {movies.length} </h1>

        {/* 외부 이미지 가져오는 법! */}
        {/* <Image src={'https://images.unsplash.com/photo-1719176372344-b29f6613e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'} 
               width={100} height={180}
        /> */}

        {/* lastOfIndex {lastOfIndex} startOfIndex {startOfIndex} */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {
                pageMovies.map(item => <Card key={item.title} movie={item} />)
            }
        </div>

        <Pagination pagePerCount={pagePerCount}  
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                    length={movies.length}
        />
        {/* {
            movies.length && JSON.stringify(movies[0])
        } */}
    </div>
  )
}

export default Movies