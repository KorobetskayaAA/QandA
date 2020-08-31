using System;

namespace QandA.Models
{
    public class AnswerGetResponse
    {
        public int AnswerId { get; set; }
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public string Username { get; set; }
        public DateTime Created { get; set; }
    }
}