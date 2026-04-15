// function Cup() {
//   // 나쁜 지점: 이미 존재했던 변수를 변경하고 있습니다!
//   let guest = 0;
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup guest={1}/>
//       <Cup guest={2} />
//       <Cup guest={3}/>
//     </>
//   );
// }


function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

