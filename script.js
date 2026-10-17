// === QUIZ DATA — All 60 Questions with Answers & Points ===
const quizData = [
  { q: "A descriptive text about a person tells about:", opts: ["only their job", "looks, likes, dislikes, and what they do", "only their age", "only where they live"], ans: 1, pts: 10 },
  { q: "Uncle Walid usually wears a 👴👕, but in the photo he wears a 👔.", opts: ["jacket", "sweater", "coat", "shirt"], ans: 3, pts: 10 },
  { q: "To make adjectives stronger, you can use:", opts: ["very and really", "fast and slow", "nice and good", "happy and sad"], ans: 0, pts: 10 },
  { q: "Which phrase describes facial hair above the lip?", opts: ["a beard", "a moustache", "glasses", "sideburns"], ans: 1, pts: 10 },
  { q: "Which phrase describes hair on the chin and cheeks?", opts: ["a moustache", "a beard", "straight hair", "curly hair"], ans: 1, pts: 10 },
  { q: "\"Old\" is the opposite of:", opts: ["tall", "young", "short", "happy"], ans: 1, pts: 10 },
  { q: "\"Straight\" describes:", opts: ["hair without curls", "very long hair", "hair tied back", "white hair"], ans: 0, pts: 10 },
  { q: "People wear ____ to see better.", opts: ["earrings", "glasses", "hats", "shirts"], ans: 1, pts: 10 },
  { q: "\"Yippee!\" shows a feeling of:", opts: ["fear", "excitement", "sadness", "anger"], ans: 1, pts: 10 },
  { q: "Farook’s grandpa wears ____ to help him read.", opts: ["glasses", "a hat", "earrings", "a scarf"], ans: 0, pts: 10 },
  { q: "Which word is NOT used to describe Grandpa?", opts: ["old", "tall", "curly", "straight"], ans: 2, pts: 10 },
  { q: "Grandpa’s hair is:", opts: ["black", "white", "brown", "blonde"], ans: 1, pts: 10 },
  { q: "Mrs. Park looks at a photo of :", opts: ["her daughter", "herself when she was young", "her friend", "her sister"], ans: 1, pts: 10 },
  { q: "In the photo, her hair was:", opts: ["short and curly", "black and straight, long ponytail", "white and short", "brown and wavy"], ans: 1, pts: 10 },
  { q: "Now her hair is:", opts: ["black and long", "shoulder-length and white", "curly and brown", "the same as before"], ans: 1, pts: 10 },
  { q: "What is still the same?", opts: ["her hair", "her smile", "her glasses", "her age"], ans: 1, pts: 10 },
  { q: "She feels sad because:", opts: ["she lost her photo", "she sees she has grown old", "she has no friends", "her hair is curly"], ans: 1, pts: 10 },
  { q: "\"Shoulder-length\" means hair:", opts: ["is very long, down the back", "reaches the shoulders", "is very short", "is tied up"], ans: 1, pts: 10 },
  { q: "\"Tied up and hangs down\" describes a:", opts: ["curl", "ponytail", "moustache", "beard"], ans: 1, pts: 10 },
  { q: "The story shows we can:", opts: ["stay young forever", "value what stays the same inside", "never change", "look the same always"], ans: 1, pts: 10 },
  { q: "\"Usually wears\" describes:", opts: ["what someone is wearing right now", "what someone often wears", "what someone never wears", "what someone will wear"], ans: 1, pts: 10 },
  { q: "\"Is wearing\" describes:", opts: ["a habit", "right now", "the past", "the future"], ans: 1, pts: 10 },
  { q: "Carlos at first felt ____ about the roller coaster.", opts: ["happy and excited", "scared and unsure", "angry and sad", "bored and tired"], ans: 1, pts: 10 },
  { q: "In the end, Carlos:", opts: ["hated the ride", "loved the ride and wanted to go again", "was too scared to try", "felt sick"], ans: 1, pts: 10 },
  { q: "To understand a character, look at their:", opts: ["clothes only", "words and actions", "hair only", "age"], ans: 1, pts: 10 },
  { q: "Which is NOT a feeling word?", opts: ["excited", "sad", "beard", "afraid"], ans: 2, pts: 10 },
  { q: "When you compare and contrast, you look for things that are:", opts: ["true and false", "same and different", "good and bad", "old and new"], ans: 1, pts: 10 },
  { q: "\"Smaller, behind thicker glasses\" — these words show:", opts: ["how Mrs. Park has stayed the same", "how Mrs. Park has changed", "what Mrs. Park likes", "what Mrs. Park does"], ans: 1, pts: 10 },
  { q: "Which sentence is correct?", opts: ["He usually wears a brown hat.", "He wear usually a brown hat.", "He is wear a brown hat.", "Wears he a brown hat."], ans: 0, pts: 10 },
  { q: "The main goal of reading about characters is to:", opts: ["memorize all words", "understand their feelings and why they act that way", "find every new word", "finish quickly"], ans: 1, pts: 10 },
  { q: "A cause is:", opts: ["what happens", "why something happens", "a feeling", "a story"], ans: 1, pts: 10 },
  { q: "An effect is:", opts: ["the reason something happens", "the result of something", "a party", "a game"], ans: 1, pts: 10 },
  { q: "Which words help you find cause and effect?", opts: ["happy, sad, excited", "because, so, if", "big, small, old", "first, next, then"], ans: 1, pts: 10 },
  { q: "In the picture, the green team is upset because:", opts: ["they scored a goal", "the white team scored a goal", "the game finished early", "it started raining"], ans: 1, pts: 10 },
  { q: "Mary is disappointed because:", opts: ["she arrived late", "they lost the game yesterday", "she hurt her knee", "no one came to play"], ans: 1, pts: 10 },
  { q: "Coach Sanders said: \"If you score a goal, we might win.\" This shows:", opts: ["a sure fact", "a possibility / condition", "a past event", "a command"], ans: 1, pts: 10 },
  { q: "Mary didn’t score a goal, so:", opts: ["they won the game", "they lost the game", "she felt happy", "Helen stayed in the game"], ans: 1, pts: 10 },
  { q: "Which is the correct cause–effect pair?", opts: ["Cause: Helen hurt her knee → Effect: She stopped playing", "Cause: They lost → Effect: Helen played well", "Cause: Mary scored → Effect: They lost", "Cause: Coach left → Effect: They won"], ans: 0, pts: 10 },
  { q: "Samantha didn’t go to Nida’s house because:", opts: ["she was sick", "she slept late", "she forgot the time", "she went to school early"], ans: 1, pts: 10 },
  { q: "Ed wanted to play music, so:", opts: ["he played his own CDs", "he asked DJ Sky to play music", "he sang songs himself", "he turned off the music"], ans: 1, pts: 10 },
  { q: "How did Ricky Berry get Ed’s address?", opts: ["he looked it up online", "DJ Sky gave it to him", "he asked Samantha", "he found it in a book"], ans: 1, pts: 10 },
  { q: "Samantha will show Nida a picture because:", opts: ["Nida doesn’t believe her", "Nida wants to copy it", "she wants to sell it", "it’s a gift for Nida"], ans: 0, pts: 10 },
  { q: "What did Samantha do at the party?", opts: ["she sang a song", "she took a picture of Ricky Berry", "she played music", "she gave a present"], ans: 1, pts: 10 },
  { q: "\"It was a big party because Ed turned 18.\" What is the effect?", opts: ["Ed turned 18", "it was a big party", "everyone came", "they played music"], ans: 1, pts: 10 },
  { q: "\"So it was a big party.\" Here so shows:", opts: ["the cause", "the result", "a question", "a feeling"], ans: 1, pts: 10 },
  { q: "I was tired, ____ I went to bed early.", opts: ["because", "so", "if", "but"], ans: 1, pts: 10 },
  { q: "I went to the party ____ it was Ed’s birthday.", opts: ["so", "because", "if", "then"], ans: 1, pts: 10 },
  { q: "____ you come, you will have fun.", opts: ["Because", "So", "If", "That"], ans: 2, pts: 10 },
  { q: "Sleep late means:", opts: ["go to bed early", "wake up later than usual", "sleep at school", "never wake up"], ans: 1, pts: 10 },
  { q: "Send a text means:", opts: ["write a letter", "send a message on a phone", "talk on the phone", "write an email"], ans: 1, pts: 10 },
  { q: "Meet a rock star means:", opts: ["see him on TV", "be in the same place and speak with him", "listen to his music", "buy his CD"], ans: 1, pts: 10 },
  { q: "Take a picture means:", opts: ["draw someone", "use a camera to get an image", "show a photo", "buy a photo"], ans: 1, pts: 10 },
  { q: "Samantha wrote her message as a(n):", opts: ["letter", "email", "story", "poem"], ans: 1, pts: 10 },
  { q: "Samantha says: \"If you don’t believe me, ____\"", opts: ["I will not come", "I will show you tomorrow", "it’s OK", "you are wrong"], ans: 1, pts: 10 },
  { q: "Which sentence uses because correctly?", opts: ["Because I was late, so I ran.", "I ran because I was late.", "I was late because I ran.", "So I was late, because I ran."], ans: 1, pts: 10 },
  { q: "Which sentence uses so correctly?", opts: ["It was raining, so I stayed inside.", "So it was raining, I stayed inside.", "I stayed inside so it was raining.", "It was raining I so stayed inside."], ans: 0, pts: 10 },
  { q: "Which sentence uses if correctly?", opts: ["If you study, you will learn.", "You will learn if you study?", "If you study you will learn.", "You learn if you will study."], ans: 0, pts: 10 },
  { q: "Disappointed means:", opts: ["very happy", "sad because something didn’t happen", "angry with everyone", "tired and bored"], ans: 1, pts: 10 },
  { q: "Famous means:", opts: ["very well‑known by many people", "very rich", "very kind", "very smart"], ans: 0, pts: 10 },
  { q: "What is a good thing to do if you are late or miss something?", opts: ["never explain", "tell a lie", "explain the reason and say sorry", "wait for the other person to ask"], ans: 2, pts: 10 }
];

// === STATE ===
let currentQ = 0, score = 0, points = 0, studentName = "", answered = Array(quizData.length).fill(null);
const sndCorrect = document.getElementById('snd-correct');
const sndWrong = document.getElementById('snd-wrong');
const sndComplete = document.getElementById('snd-complete');

// === ELEMENTS ===
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const finishScreen = document.getElementById('finish-screen');
const qNum = document.getElementById('q-num');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const feedback = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const pointsEl = document.getElementById('points');
const progressBar = document.getElementById('progress');

// === INIT ===
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('prev-btn').addEventListener('click', showPrev);
document.getElementById('next-btn').addEventListener('click', showNext);
document.getElementById('restart-btn').addEventListener('click', restart);
document.getElementById('save-score-btn').addEventListener('click', saveScore);
loadLeaderboard();

function startQuiz() {
  studentName = document.getElementById('student-name').value.trim() || "Student";
  score = 0; points = 0; currentQ = 0; answered.fill(null);
  showScreen('question');
  renderQ();
}

function renderQ() {
  const q = quizData[currentQ];
  qNum.textContent = `Question ${currentQ+1} of ${quizData.length}`;
  questionText.textContent = q.q;
  feedback.className = 'feedback'; feedback.textContent = '';
  optionsDiv.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65+i)}) ${opt}`;
    if (answered[currentQ] !== null) {
      btn.classList.add('disabled');
      if (i === q.ans) btn.classList.add('correct');
      else if (i === answered[currentQ]) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => selectAnswer(i));
    }
    optionsDiv.appendChild(btn);
  });

  updateProgress();
}

function selectAnswer(i) {
  const q = quizData[currentQ];
  answered[currentQ] = i;

  if (i === q.ans) {
    score++; points += q.pts;
    feedback.textContent = "✅ Correct! +" + q.pts + " pts";
    feedback.className = 'feedback show correct';
    sndCorrect.currentTime = 0; sndCorrect.play();
  } else {
    feedback.textContent = "❌ Not quite — the correct answer is " + String.fromCharCode(65+q.ans);
    feedback.className = 'feedback show wrong';
    sndWrong.currentTime = 0; sndWrong.play();
  }
  scoreEl.textContent = score;
  pointsEl.textContent = points;
  renderQ(); // re-render to apply styling
}

function showPrev() {
  if (currentQ > 0) { currentQ--; renderQ(); }
}
function showNext() {
  if (currentQ < quizData.length - 1) { currentQ++; renderQ(); }
  else if (answered.every(a => a !== null)) showFinish();
  else { alert("You've reached the last question!"); showFinish(); }
}

function updateProgress() {
  progressBar.style.width = `${((currentQ+1)/quizData.length)*100}%`;
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`${name}-screen`).classList.add('active');
}

function showFinish() {
  showScreen('finish');
  document.getElementById('final-score-val').textContent = score;
  document.getElementById('final-points').textContent = points;
  document.getElementById('percent').textContent = Math.round((score/quizData.length)*100);

  let msg = '';
  const pct = score/quizData.length;
  if (pct === 1) msg = `🌟 Perfect work, ${studentName}! You got all questions right!`;
  else if (pct >= 0.8) msg = `👏 Awesome job, ${studentName}!`;
  else if (pct >= 0.6) msg = `👍 Good work, ${studentName}! Keep practicing!`;
  else msg = `💪 Nice try, ${studentName}! Review and try again!`;
  document.getElementById('final-message').textContent = msg;

  sndComplete.play();
  confettiEffect();
}

function confettiEffect() {
  const colors = ['#4f46e5','#10b981','#f59e0b','#ef4444','#ec4899'];
  for (let i=0; i<100; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = `${Math.random()*100}%`;
    c.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDelay = `${Math.random()*2}s`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

function restart() {
  showScreen('start');
  document.getElementById('student-name').value = '';
}

// === SCORE SAVING ===
function saveScore() {
  // GitHub-compatible: localStorage only
  const leaderboard = JSON.parse(localStorage.getItem('oxfordQuizScores') || '[]');
  leaderboard.push({
    name: studentName,
    score: score,
    points: points,
    pct: Math.round((score/quizData.length)*100),
    date: new Date().toLocaleDateString()
  });
  leaderboard.sort((a,b) => b.points - a.pct);
  localStorage.setItem('oxfordQuizScores', JSON.stringify(leaderboard.slice(0,10)));
  loadLeaderboard();
  alert("✅ Score saved!");

  // --- If you want PHP/MySQL instead — uncomment below and set up scores.php ---
  /*
  fetch('scores.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: studentName, score, points})
  }).then(r => r.text()).then(t => { alert("Saved! " + t); loadLeaderboard(); });
  */
}

function loadLeaderboard() {
  const list = document.getElementById('leaderboard');
  const leaderboard = JSON.parse(localStorage.getItem('oxfordQuizScores') || '[]');
  list.innerHTML = '';
  if (!leaderboard.length) {
    list.innerHTML = '<li>No scores yet — be the first! 🏆</li>';
    return;
  }
  leaderboard.forEach((entry, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${i+1}.</strong> ${entry.name} — ${entry.score}/${quizData.length} · ${entry.points} pts · ${entry.pct}% <small>(${entry.date})</small>`;
    list.appendChild(li);
  });
}
