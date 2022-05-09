const events = [
    {
      id: 'e1',
      title: 'Introduction to Programming',
      description:
        'This is an introductory course on the basic concepts of computer programming with a focus on object oriented programming using C++. Students have to do programming assignments throughout the course. At the end of the term, a written exam tests the more theoretical aspects of the course. Programming assignments and written exam contribute 50% each to the overall grade.',
      location: 'Enseada Street 13, 12233260 Sao Paulo',
      date: '2022-08-12',
      image: 'images/coding-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Women in Tech!',
      description:
        "We offer a solid introduction to product development, product design and product management.",
      location: 'Indaiatuba 15 Street, 12233666 Sao Jose dos Campos',
      date: '2022-07-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Caraguatatuba Street 63, 13237460 Itajubá',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'Branching AND Iteration,
      description:
        ' In this lecture, Dr. Fujisawa introduces strings and indentation in Python, then discusses basic features of programmatic logic, such as branching, conditionals, iteration, and loops.',
      location: 'Rio Verde Street 2, 13237460 Salvador',
      date: '2023-04-11',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return events.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return events;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return events.find((event) => event.id === id);
  }